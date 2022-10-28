import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({ products }) => {
    return (
        <section className='ListIt' onClick={() => console.log('hice click a este item')}>
        {products.map(prod => <Item key={prod.id} {...prod} />)}
        </section>    

        /*
        <section className='ListIt' onClick={() => console.log('hice click a este item')}>
            { products.map(prod => (
                <Item key={prod.id} prod={prod}/>
            ))
            }
            <from>
                <input />
                <button onClick={() => console.log('submit del form')}>Submit</button>
            </from>
        </section> */
    )
}

export default ItemList