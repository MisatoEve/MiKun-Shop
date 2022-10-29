import { useState, useEffect, useContext } from 'react' 
//▼reemplazamos funcionalidad del asynmock por firebase
//import { getProducts, getProductsByCategory } from '../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
//▼consulta de todos los documentos de la colección -getDocs en plural-
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase'
//▲para acceder a la colección importo la dirección a la base de datos que es la referencia db, e importo también la función collection para acceder a products
import { NotificationContext } from '../../notification/Notification'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    //const [error, setError] = setError(false)
    const [loading, setLoading] = useState(true)

const { setNotification } = useContext(NotificationContext)

    const { categoryId } = useParams()
    
    useEffect(() =>{
        setLoading(true)

        const collectionRef = categoryId  
        ? query(collection(db, 'products'), where('category', '==', categoryId) )
        : collection(db, 'products')

        getDocs(collectionRef).then(response => {
            console.log(response)

            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                console.log(data)
                return { id: doc.id, ...data}
            })

            setProducts(productsAdapted)
        })
        .catch(error => {
            setNotification('error', 'No pudimos acceder a los productos')
        })
        .finally(() => {
            setLoading(false)
        })
//línea quitada para reemplazar asyncMock▼
//        const asyncFunction = categoryId ? getProductsByCategory : getProducts

//        asyncFunction(categoryId).then(response => {
//            setProducts(response)
//línea quitada para reemplazar asyncMock▲
//        getProducts(categoryId).then(products => {
//            setProducts(products)
//línea quitada para reemplazar asyncMock▼
//        }).catch(error => {
//            console.log(error)
//        }).finally(() => {
//            setLoading(false)
//        })
//línea quitada para reemplazar asyncMock▲
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