import React from 'react';
import { listItems } from '../assets/listItems';
import '../styles/Pannel.css'
import Cart from './Cart'

const Pannel = ({activeCategory, setActiveCategory, rangeValue, setRangeValue, cart, updateCart}) => {

   
    
    const listCategories = listItems.reduce((acc, currentValue) => acc.includes(currentValue.type) ? acc : acc.concat(currentValue.type), [])
    const listPrixString = listItems.reduce((acc, currentValue) => acc.includes(currentValue.prix.toString()) ? acc : acc.concat(currentValue.prix.toString()), [])
    
    const minPrix = parseInt(listPrixString.sort()[0])
    const maxPrix = parseInt(listPrixString.sort().reverse()[0])

    return (
        <div className='pannel'>
            <h2>Catégories :</h2>
            <select 
                    value={activeCategory}
				    onChange={(e) => setActiveCategory(e.target.value)}
                >
                <option value=''>Tout</option>
                    { listCategories.map((cat)=><option value={cat} >{cat}</option>)}
            </select>
            <h2>Prix :</h2>
                {minPrix} €
                <input 
                    type="range" 
                    min= {minPrix}
                    max= {maxPrix} 
                    defaultValue={maxPrix} 
                    onChange={(e)=>setRangeValue(e.target.value)} 
                />
                {maxPrix} €
            <Cart cart={cart} updateCart={updateCart} />
        </div>
    );
};

export default Pannel;