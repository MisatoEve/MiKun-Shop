import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { getDocs, addDoc, collection, where, query, documentId, writeBatch } from 'firebase/firestore'
import { db } from '../../services/firebase'
//import Notification from "../../notification/Notification";
import React from "react"
import Form from '../Form/FormCheck'
 
const Checkout = () => {
  const [loading, setLoading] = useState(false)
  
  const { cart, total, clearCart } = useContext(CartContext)

  const createOrder = async (buyer) => {
    setLoading(true)
    try {
        const objOrder = {
        buyer,
        items: cart,
        total     
      };
      
      const ids = cart.map(prod => prod.id)
      const productsRef = collection(db, 'products')

      const productsFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids))) 
      const { docs } = productsFirestore

      const batch = writeBatch(db)
      const outOfStock = []

      docs.forEach(doc => {
        //▼base de datos actualizada
        const dataDoc = doc.data()
        const stockDb = dataDoc.stock
        //▼lo que el usuario agregó, del cart.  
        const productCartUser = cart.find(prod => prod.id === doc.id)
        const prodQuantity = productCartUser?.quantity

        if(stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity})
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc})
        }
      })

      if(outOfStock.length === 0) {
        await batch.commit()    
        
        const orderRef = collection(db, 'orders')
        const orderAdded = await addDoc(orderRef, objOrder)
        alert(`Orden generada con éxito! El id de su orden es: ${orderAdded.id}`)
        alert(`Nos pondremos en contacto para coordinar. Gracias por su compra ^^`)

        console.log(`El id de su orden es: ${orderAdded.id}`)
        clearCart()
      } else {
        alert('error', `el producto esta temporalmente sin stock`)
        console.log('El producto esta temporalmente sin stock')
      }      
    } catch (error) {
        alert('error', 'Ha ocurrido un error!')
        console.log(error)
    } finally {
      setLoading(false)
    }  
  }

  if(loading){
    return <h1>►►► Su orden se está generando ►►►</h1>
  }

  return (
    <>
      <h1>Ingrese sus datos</h1> 
      <Form createOrder={createOrder}/>
    </>
  )

}

export default Checkout
