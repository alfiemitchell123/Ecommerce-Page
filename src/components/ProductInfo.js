import AddToCart from "./AddToCart";

const ProductInfo = () => {
    return (
        <div className="infoContainer">
            <h3 className="companyTitle">Sneaker Company</h3>
            <h1 className="productName">Fall Limited Edition Sneakers</h1>
            <p className="productDescription">These low profile sneakers are your perfect casual wear companion.
                Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            <div className="priceContainer">
                <h2 className="price">$125.00</h2>
                <div className="discount">50%</div>
                <h4 className="oldPrice">$250.00</h4>
            </div>
            <AddToCart />
        </div>
    )
}

export default ProductInfo;