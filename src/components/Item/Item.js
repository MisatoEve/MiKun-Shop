import './Item.css';
import { Link } from "react-router-dom"
import { useContext } from "react";
//import { Context } from "../../App";

//const Item = ({ prod }) => {

const Item = ({ id, name, img, price}) => { 
//    const value = useContext(Context)
//    console.log(value)
    
    return (
        /*<article className="cardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <h3 className="Info">
                    Precio: ${price}
                </h3>
            </section>           
            <footer className='ItemFooter'>
                <Link to={`/detail/${id}`} className='Option'>Ver detalle</Link>
            </footer>
        </article> 

        <div>
        <article className='card container-fluid' style={{ width: '28rem'}}>
            <h2 className='card-title'>{prod.name}</h2>
            <h3 className='precioCard'>u$d {prod.price}</h3>
            <img src={prod.img} alt={prod.name}></img>         
            <Link to={`/detail/${prod.id}`} className='content'>ver más detalle</Link>                        
        </article>
    </div>   */
    <div>
        <article className='card container-fluid' style={{ width: '28rem'}}>
            <h2 className='card-title'>{name}</h2>
            <h3 className='precioCard'>US$ {price}</h3>
            <picture className='card-img'>
                <img src={img} alt={name}></img>                 
            </picture>
            <Link to={`/detail/${id}`} className='content'>ver más detalle</Link>                        
        </article>
    </div>
    )
}

export default Item