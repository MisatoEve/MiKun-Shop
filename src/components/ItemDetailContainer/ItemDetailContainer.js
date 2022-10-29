import { useState, useEffect } from "react"
//▼reemplazamos funcionalidad del asynmock por firebase
//import { getProductById } from "../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import './ItemDetailContainer.css'
//▼consultamos solo un documentos de la colección -getDoc en singular- aquí usaremos el id
import { getDoc, doc } from "firebase/firestore"
//▲para acceder a un documento -no a la colección- importo la función doc para crear la referencia
import { db } from "../../services/firebase"

//const ItemDetailContainer = ({ addItem }) => {
const ItemDetailContainer = ({ setCart }) => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()
    //const param = useParams()
    //console.log(param)

    useEffect(() =>{

        const docRef = doc(db, 'products', productId)

        getDoc(docRef).then(doc => {
            const data = doc.data()

            const productAdapted = { id: doc.id, ...data }

            setProduct(productAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })

//línea quitada para reemplazar asyncMock▼
//        getProductById(productId).then(product => {
//            setProduct(product)
//        }).finally(() => {
//            setLoading(false)
//        })
//línea quitada para reemplazar asyncMock▲
    }, [productId])

    console.log(product)

    if(loading){
        return <h1>Loading...</h1>
    }

    return (
        <>
        <h1>Detalle del producto</h1>
        <ItemDetail {...product} setCart={setCart}/>                
{/*     <ItemDetail {...product} addItem={addItem}/>                 
            <section>
                <h2 className='card-title'>{product.name}</h2>
                <h3>{product.category}</h3>
                <img src={product.img} alt={product.name}></img>
                <p className='precioCard'>{product.price}</p>
                <h4>{product.description}</h4>
            </section>
        */}
        </>
    )
}

export default ItemDetailContainer