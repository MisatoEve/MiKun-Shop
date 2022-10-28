import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
//    const location = useLocation()
    
//    console.log(location)

    return (
        <nav className='header' style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div className='header__titulo'>
                <Link to='/'>
                    <h1 
                    /*</div>style={{ 
                        backgroundColor: 'green',
                        color: 'white'
                    }}*/ >MiKun Shop ^^</h1>                    
                </Link>
            </div>
            <div className="Categories">
                <NavLink to='/category/teclados' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Teclados</NavLink>
                <NavLink to='/category/notebook' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Notebooks</NavLink>                
                <NavLink to='/category/televisores' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Televisores</NavLink>
                <NavLink to='/category/celular' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Celulares</NavLink>
                <NavLink to='/category/camaras' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Cámaras</NavLink>
            </div>
            <div>
                <CartWidget />
                <span className="icons__li p-2 fs-4">
                </span>
            </div>
        </nav>
    )
}

export default Navbar