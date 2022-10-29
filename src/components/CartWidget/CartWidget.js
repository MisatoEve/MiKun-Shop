import './CartWidget.css'
import { Link } from 'react-router-dom'
import cart from './assets/cartr1.jpg'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
//import { MdOutlineShoppingBag } from "react-icons/md";
//import { useContext, useEffect, useState } from "react";

//import {  
//    Icon,
//    Flex,
//    Button,
//    Text
//} from '@chakra-ui/react'
//import { FiShoppingCart } from 'react-icons/fi';
//import { useNavigate } from 'react-router-dom'

//import { useCart } from 'context/CartContext';

//    const CartWidget = () => {
//        const navigate = useNavigate()
    
//        const { totalProductsAdded } = useCart()
    
//        return (
//            <Button variant="solid" size="md" onClick={() => navigate('/cart')}>
//                <Flex justifyContent='center' alignItems='center'>
//                    <Icon as={FiShoppingCart} h={5} w={5} alignSelf={'center'} mr={3}/>
//                    <Text fontSize='lg'>{ totalProductsAdded }</Text>
//                </Flex>
//            </Button>
//        )
//    }

//    const { cartLength } = useContext(CartContext);
//    const [cart, setCart] = useState(cartLength());
  
//    useEffect(() => {
//      setCart(cartLength());
//    }, [cartLength]);
  
//    return (
//      <>
//        <MdOutlineShoppingBag />
//        {cartLength() !== undefined && (
//          <span className="cart__count">{cart}</span>
//        )}
//      </>
//    );
//  }
    const CartWidget = () => {
        const { totalQuantity } = useContext(CartContext)
        return (
            <Link to='/cart'>
                <div className='cart__count'  style={{ color: 'white', textDecoration: 'none'}}>
                    <img src={cart} alt='cart-widget' className='cart-img'/>
                    {totalQuantity}
                </div> 
            </Link>
        )
    }
//        <div className='cart__count'> 
//            <div style={{ color: 'white' }}>
//            <img src={cart} alt='cart'/>
//            3                 
//            </div>
//        </div>
//    )
//}

export default CartWidget