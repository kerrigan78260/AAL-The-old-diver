
import Banner from './components/Banner';
import Pannel from './components/Pannel';
import ShoppingList from './components/ShoppingList';
import React, { useState }  from 'react';

function App() {

  const [activeCategory, setActiveCategory] = useState('')
  const [rangeValue, setRangeValue]= useState(1500)
  const [cart, updateCart] = useState([])

  return (
    <div className="App">
      <Banner />
      <Pannel 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
        rangeValue={rangeValue}
        setRangeValue={setRangeValue}
        cart={cart} 
        updateCart={updateCart} 
      />
      <ShoppingList 
        activeCategory={activeCategory}
        rangeValue={rangeValue}
        setRangeValue={setRangeValue} 
        cart={cart} 
        updateCart={updateCart} 
      />
      
    </div>
  );
}

export default App;
