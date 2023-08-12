import React from 'react';
import AddToCart from "./AddToCart";

const ProductInfo = ({ product }) => {
    const formattedPrice = product.price.toFixed(2);

    return (
        <div className="infoContainer">
            <h3 className="companyTitle">Sneaker Company</h3>
            <h1 className="productName">{product.name}</h1>
            <p className="productDescription">{product.description}</p>
            <div className="priceContainer">
                <h2 className="price">${formattedPrice}</h2>
                <div className="discount">{product.discount}</div>
                <h4 className="oldPrice">${(product.price * 2).toFixed(2)}</h4>
            </div>
            <AddToCart productId={product.id} />
        </div>
    )
}

export default ProductInfo;