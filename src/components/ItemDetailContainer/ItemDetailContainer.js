import { useState, useEffect } from "react"
import { getProductById } from "../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import './ItemDetailContainer.css'

//const ItemDetailContainer = ({ addItem }) => {
const ItemDetailContainer = ({ setCart }) => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()
    //const param = useParams()
    //console.log(param)

    useEffect(() =>{
        getProductById(productId).then(product => {
            setProduct(product)
        }).finally(() => {
            setLoading(false)
        })
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