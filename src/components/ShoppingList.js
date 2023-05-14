import React from 'react';
import CardItem from './CardItem';
import { listItems } from '../assets/listItems';
import '../styles/ShoppingList.css'


const ShoppingList = ({activeCategory, rangeValue, cart, updateCart}) => {
    return (
        <div className='shoppingList'>
            {listItems.map(({cover, marque, modele, prix, id, type })=>
                (!activeCategory || activeCategory===type) && prix <= rangeValue ?
                <div key={id}>
                    <CardItem 
                        id={id}
                        cover={cover} 
                        type={type}
                        marque={marque} 
                        modele={modele} 
                        prix={prix.toString()}
                        cart={cart}
                        updateCart={updateCart}
                     />
                </div>:
                null
                )}
        </div>
    );
};

export default ShoppingList;