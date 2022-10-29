import './Cart.css'
import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

//import { Button, Card, Container, Stack } from "react-bootstrap";
//import { BsTrash } from "react-icons/bs";

/*function Cart() {
    const { cartList, removeList, deleteItem, totals } = useContext(CartContext);
  
    return (
      <Container className="cart__container">
        <h2>Carrito de compras</h2>
        <Container className="cart__card--container">
          {cartList.length <= 0 ? (
            <Container className="cart__container--empty">
              <h3>EL carrito se encuentra vacio...</h3>
              <Link to={"/"}>
                <Button className="btn--toShop">Ir al shop</Button>
              </Link>
            </Container>
          ) : (
            cartList.map((product) => {
              return (
                <Card key={product.id} className="cart__card">
                  <Card.Img src={product.image} />
                  <Card.Title className="cart__card--title">
                    {product.title}
                  </Card.Title>
                  <Card.Text className="cart__card--text">
                    ${product.price.toFixed(2)} X {product.quantity}
                  </Card.Text>
                  <i onClick={() => deleteItem(product.id)}>
                    <BsTrash />
                  </i>
                </Card>
              );
            })
          )}
        </Container>
        <Container className="cart__footer--container">
          <Stack className="cart__footer--stack">
            <p>
              <b>Total:</b>
            </p>
            <p>
              <b>${totals().toFixed(2)}</b>
            </p>
          </Stack>
          <Button
            className="itemCart__btn"
            onClick={() => removeList()}
            disabled={cartList.length > 0 ? false : true}
          >
            Vaciar Carrito
          </Button>
          <Link to={"/checkout"}>
            <Button
              className="itemCart__btn"
              disabled={cartList.length > 0 ? false : true}
            >
              Finalizar Compra
            </Button>
          </Link>
        </Container>
      </Container>
    );*/

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)  

    if(totalQuantity === 0) {
        return (
            <h1>El carrito de compras está vacío.</h1>
        )
    }

    return (     
        <div>
            <h1>CARRITO DE COMPRAS</h1>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3 className="btn--toShop">Total: US${total}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <Link to='/checkout' className='Option'>Checkout</Link>
            <h4 className="send__Shop">ENVÍO GRATIS SUPERANDO LOS $10.000</h4>
            <article className="send__Location">
                <h5 style={{ color: '#FF5800'}}>NUESTRO LOCAL</h5>
                <p>Retira Gratis por Nuestro Local. MENDOZA - ARGENTINA</p>
                <p>lunes a viernes de 9:30 a 17:30</p>
                <h6 style={{ color: '#FF5800'}}>Gratis</h6>
            </article>
        </div>
    )
}


export default Cart 