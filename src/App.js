// ▼ react imports
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import { useState, createContext } from 'react';
// ▼ context imports
import { CartContextProvider} from './context/CartContext' 
import { NotificationProvider } from './notification/Notification';
// ▼ components
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
//import Login from './components/User/login/Login';
//import Register from './components/User/register/Register';
import Checkout from './components/Checkout/Checkout';
import { ErrorPrueba } from './components/ErrorPrueba/ErrorPrueba'
import Footer from './components/Footer/Footer';

// ▼ styles
import './App.css';
function App() {

  return (
    <div className="App">
        <NotificationProvider>
          <CartContextProvider>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path='/' element={<ItemListContainer  greeting={'Estos son nuestros productos disponibles!! ^^'}/>} />
                <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Listado filtrado de caterogía:'}/>} />
                <Route path='/detail/:productId' element={<ItemDetailContainer /*setCart={addItem}*/ />} /> 
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />  
                {/*<Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />  */}
                <Route path='*' element={<ErrorPrueba/>}/>         
              </Routes> 
              <Footer />   
            </BrowserRouter>
          </CartContextProvider>
        </NotificationProvider>
    </div>
  );
}

export default App;
