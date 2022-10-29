import { useState, useEffect } from 'react' 
import { getProducts, getProductsByCategory } from '../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    //const [error, setError] = setError(false)
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    
    useEffect(() =>{
        setLoading(true)
        const asyncFunction = categoryId ? getProductsByCategory : getProducts
        asyncFunction(categoryId).then(response => {
            setProducts(response)
//        getProducts(categoryId).then(products => {
//            setProducts(products)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId])

//    useEffect(() => {
//        const onRessize = () => console.log('cambié de tamaño')

//        window.addEventListener('resize', onRessize)
//        return () => window.removeEventListener('resize', onRessize)
//    }, [])

//    console.log(products)
// ▼ if temprano corto la ejecución 
//    if(loading) {        
//        return <h1>Loading...</h1>
//    }
//▼ if con operador ternario para validar RENDERIZADO CONDICIONAL
    if(loading && true) {        
        return <h1>Loading...</h1>
    }


//    if(error) {
//        return <h1>Se ha producido un error</h1>
//    }

    return (
        <div className="ItemListContainer" onClick={() => console.log('hice click en el ItemListContainer')}>
            {/*<h2>{greeting}</h2>*/}
            <h2>{`${greeting} ${categoryId || ''}`}</h2>
            {/* { products.length > 0 ? <ItemList products={products} /> : <h3>No hay productos disponibles</h3> } si la validación pasa ejecutar la función, si no pasa no ejecutar */}
            {/* ▼ RENDERIZADO CONDICIONAL */}            
            { products.length > 0 && <ItemList products={products} />}

        </div>
    )
}

export default ItemListContainer