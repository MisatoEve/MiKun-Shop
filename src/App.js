import './App.css';
import { useState, createContext } from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
//import AvatarJsx from './components/AvatarJsx';
//import Button from './components/Button/Button'; 
//import Counter from './components/Counter/Counter';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { CartContextProvider} from './context/CartContext' 
//import Animation from './components/Animation/Animation';
import { ErrorPrueba } from './components/ErrorPrueba/ErrorPrueba'
//export const Context = createContext()
//export const CartContext = createContext()

function App() {
//me lo llevo a CartContext ▼
//  const [cart, setCart] = useState([])
//  console.log(cart)

//me lo llevo a CartContext ▼
//  const addItem = (productToAdd) => {
//    if(!isInCart(productToAdd.id)){
//    setCart([...cart, productToAdd])
//    } else {
//      console.log('producto ya agregado!')
//    }
//  }
//me lo llevo a CartContext ▼
//  const isInCart = (id) => {
//    return cart.some(prod => prod.id === id)
//  }

//  const accept = () => {
//    console.log('cancele')
//  }
//me lo llevo a CartContext ▼
//  const removeItem =(id) => {
//    const cartWithoutItem = cart.filter(prod => prod.id !== id)
//    setCart(cartWithoutItem)
//  }
  
  return (
    <div className="App">
{/*      <CartContext.Provider value={{ addItem, removeItem }}> */}
{/*      <Context.Provider value={{ value1: 'valor a compartir', value2: 'otro'}}> */}
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          {/*<Animation />*/} 
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Estos son nuestros productos disponibles!! ^^'}/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Listado filtrado'}/>} />
            <Route path='/detail/:productId' element={<ItemDetailContainer /*setCart={addItem}*/ />} />   
            <Route path='*' element={<ErrorPrueba/>}/>         
          </Routes>    
        </BrowserRouter>
      </CartContextProvider>
{/*      </CartContext.Provider> */}
        {/* <header className="App-header">*/}
          {/* <img src={logo} className="App-logo" alt="logo" />
          <AvatarJsx />
          <Button label={'cancelar'} background='blue' action={accept}/>
          <Button label={'aceptar'} background='green' action={() => console.log('acepte')}/> */}
          {/* <h1 className='Titulo' style={{ backgroundColor: 'green'}} onClick={() => console.log('click')}>MisatoEve ^^</h1>      
        <button>boton</button> 
        <input /> */}       
        {/* </header>*/}
        {/*<Counter />*/} 
      {/* </Context.Provider> */} 
    </div>
  );
}

export default App;
