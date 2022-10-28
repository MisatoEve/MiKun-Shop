import './CartWidget.css'
import { Link } from 'react-router-dom'
import cart from './assets/cartr1.jpg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)
    return (
        <Link to='/cart'>
            <div className='cart__count'  style={{ color: 'white', textDecoration: 'none'}}>
                <img src={cart} alt='cart-widget' className='cart-img'/>
                {totalQuantity}
            </div> 
        </Link>
//        <div className='cart__count'> 
//            <div style={{ color: 'white' }}>
//            <img src={cart} alt='cart'/>
//            3                 
//            </div>
//        </div>
    )
}

export default CartWidget