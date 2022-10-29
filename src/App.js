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
//import Login from './components/User/login/Login';
//import Register from './components/User/register/Register';
//import { Checkout } from './components/Checkout/Checkout';
import { ErrorPrueba } from './components/ErrorPrueba/ErrorPrueba'
import Footer from './components/Footer/Footer';
//import Notification from './notification/Notification'; nos ahorramos de importar esta línea
//import AvatarJsx from './components/AvatarJsx';
//import Button from './components/Button/Button'; 
//import Counter from './components/Counter/Counter';
// ▼ styles
import './App.css';
//export const Context = createContext()
//export const CartContext = createContext()
function App() {

  return (
    <div className="App">
        <NotificationProvider>
          <CartContextProvider>
            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path='/' element={<ItemListContainer  greeting={'Estos son nuestros productos disponibles!! ^^'}/>} />
                <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Listado filtrado'}/>} />
                <Route path='/detail/:productId' element={<ItemDetailContainer /*setCart={addItem}*/ />} /> 
                {/*<Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/checkout" element={<Checkout />} /> */}  
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
