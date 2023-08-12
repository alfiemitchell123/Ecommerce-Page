import React, { useState } from 'react';
import './App.css';
import logo from './images/logo.svg';
import Navbar from './components/Navbar';
import ThumbnailGallery from './components/ThumbnailGallery';
import ProductInfo from './components/ProductInfo';
import AddToCart from './components/AddToCart';
import CartIcon from './components/CartIcon';
import ProfilePhoto from './images/image-avatar.png';
import MobileMenu from './components/MobileMenu';
import Cart from './components/Cart';
import { useCart } from './components/CartContext';
import products from './components/ProductsData';

function App() {
  const { cartOpen } = useCart();
  const product = products[0];

  return (
    <div className="App">
      <div className="container">
        <div className="row header-container">
          <header className="header">
            <MobileMenu />
            <img className="d-inline" id="logo" src={logo} alt="sneakers" draggable="false" />
            <Navbar></Navbar>
            <CartIcon />
            <img id="profile-photo" src={ProfilePhoto} alt="You" width="40px" height="40px" draggable="false" />
          </header>
          <hr />
        </div>
        <div className="row main-content justify-content-center">
          <div className="col-7 w-auto gallery-content">
            <ThumbnailGallery />
          </div>
          <div className="col-4 product-content">
            <ProductInfo product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;