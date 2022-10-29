import './ItemDetail.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
//import CartContext from '../../context/CartContext'
//import { CartContext } from '../../App' ►cambiamos la referencia
import { CartContext } from '../../context/CartContext'
import { NotificationContext } from '../../notification/Notification'

//const InputCount = ({onConfirm, stock, initial= 1}) => {
//    const [count, setCount] = useState(initial)

//    const handleChange = (e) => {
//        if(e.target.value <= stock) {
//            setCount(e.target.value)
//        }
//    }

//    return (
//        <div>
//            <input type='number' onChange={handleChange} value={count}/>
//            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
//        </div>
//    )
//}

//const ButtonCount = ({ onConfirm, stock, initial = 1 }) => {
//    const [count, setCount] = useState(initial)

//    const increment = () => {
//        if(count < stock) {
//            setCount(count + 1)
//        }

//    }

//    const decrement = () => {
//            setCount(count - 1)

//    }

//    return (
//        <div>
//            <p>{count}</p>
//            <button onClick={decrement}>-</button>
//            <button onClick={increment}>+</button>
//            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
//        </div>
//    )
//}


//const ItemDetail = ({ id, name, img, category, description, price, stock, setCart }) => {
    
const ItemDetail = ({ id, name, img, category, description, price, stock }) => {  
//    const [inputType, setInputType] = useState('button')
    const [quantityToAdd, setQuantityToAdd] = useState(0)

//    const value = useContext(CartContext)
//    console.log(value)
    const { addItem, getProductQuantity } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)

//    console.log(quantityToAdd)
//    const { addItem, getProductQuantity } = useContext(CartContext)
    const handleOnAdd = (quantity) => {
//        console.log('agregue al carrito')
//        console.log(quantity)
        setQuantityToAdd(quantity)
//        setCart({ id, name, price, quantity })
        const productToAdd = {
            id, name, price, quantity
        }
        addItem(productToAdd)
        setNotification('success', `Se agregó ${quantity} ${name} correctamente`)
//        addItem(productToAdd)
//        setCart(productToAdd)
    }

//    const Count = inputType === 'button' ? ButtonCount : InputCount

//    const productQuantity = getProductQuantity(id)
    const productAddedQuantity = getProductQuantity(id)

    return (
        <article className="CardItem">
{/*            <button onClick={() => setInputType(inputType === 'button' ? 'input' : 'button')}>{inputType === 'button' ? 'pasar a input' : 'pasar a button'}</button> */}
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info" style={{color: 'orange', fontSize: '2em'}}>
                    Precio: US$ {price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                {
                    quantityToAdd === 0 ? (
//                      <ItemCount onAdd={handleOnAdd} stock={stock} initial={productQuantity}/>                        
//                        <Count onConfirm={handleOnAdd} stock={stock} />
                        <ItemCount onAdd={handleOnAdd} stock={stock} initial={productAddedQuantity} />
                    ) : (
                        <Link to='/cart'>Finalizar compra</Link>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail

{/*
const Count = ({ onAdd }) => {
    const [count, setCount] = useState(0)

    return (
        <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    )

}*/}