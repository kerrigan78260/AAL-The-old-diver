import React from 'react';
import logo from '../assets/images/logo.webp'
import '../styles/Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <h1>Le vieux plongeur</h1>
            <img className='logo' src={logo} alt='logo' />
        </div>
    );
};

export default Banner;