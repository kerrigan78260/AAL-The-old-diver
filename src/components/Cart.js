import React from 'react';

const Cart = ({cart, updateCart}) => {
    
    const total = cart.reduce(
		(acc, modele) => acc + modele.amount * modele.prix,
		0
	)

    return (
        <div className='pannier'>
            {cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ type, marque, modele, prix, amount }, index) => (
							<div key={`${modele}-${index}`}>
								<div className='article'>{type} : {marque} - {modele}</div><div className='prix'> {prix} € x {amount}</div>
							</div>
						))}
					</ul>
					<h3>Total :{total} €</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
        </div>
    );
};

export default Cart;