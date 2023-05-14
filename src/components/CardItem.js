import React from 'react';
import '../styles/CardItem.css'

const CardItem = ({type, marque, modele, cover, prix, cart, updateCart}) => {
    function addToCart(type, marque, modele, prix) {
        const currentItemAdded = cart.find((item) => item.modele === modele)
        //On vérifie si la plante est déjà présente et soit on l'ajoute, soit on ajoute 1 à celle déjà présente
        if (currentItemAdded) {
            const cartFilteredCurrentItem = cart.filter(
                (item) => item.modele !== modele
            )
            updateCart([
                ...cartFilteredCurrentItem,
                { type, marque, modele, prix, amount: currentItemAdded.amount + 1 }
            ])
        } else {
            updateCart([
                ...cart, 
                { type, marque, modele, prix, amount: 1 }])
        }
    }

    return (
        <div className='container'>
            <h2>{marque} - {modele}</h2>
            <img className='image' src={cover} alt={modele}/>
            <p>{prix} €</p>
            <button className='bouton' onClick={()=>addToCart(type, marque, modele, prix)}>Ajouter</button>
        </div>
    );
};

export default CardItem;