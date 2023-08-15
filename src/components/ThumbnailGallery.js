import React, { useState } from 'react';

const ThumbnailGallery = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const handleThumbnailClick = (index) => {
        setSelectedImageIndex(index);
    };

    const fullSizeImages = [
        './images/image-product-1.jpg',
        './images/image-product-2.jpg',
        './images/image-product-3.jpg',
        './images/image-product-4.jpg',
    ];

    const thumbnailImages = [
        './images/image-product-1-thumbnail.jpg',
        './images/image-product-2-thumbnail.jpg',
        './images/image-product-3-thumbnail.jpg',
        './images/image-product-4-thumbnail.jpg',
    ];

    const handlePrevButtonClick = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex - 1 + thumbnailImages.length) % thumbnailImages.length);
    }

    const handleNextButtonClick = () => {
        setSelectedImageIndex((prevIndex) => (prevIndex + 1) % thumbnailImages.length);
    }

    return (
        <div className="thumbnail-gallery">
            <div className="imgContainer">
                <img
                    src={fullSizeImages[selectedImageIndex]}
                    alt={`Image ${selectedImageIndex + 1}`}
                    className="large-image"
                    draggable="false"
                />
                <div className="galleryBtnContainer">
                    <button onClick={handlePrevButtonClick} class="galleryBtn"><img id="prevBtn" src="./images/icon-previous.svg" alt="Previous" /></button>
                    <button onClick={handleNextButtonClick} class="galleryBtn"><img id="nextBtn" src="./images/icon-next.svg" alt="Next" /></button>
                </div>
            </div>
            <div className="thumbnails">
                {thumbnailImages.map((thumbnailImage, index) => (
                    <img
                        key={index}
                        src={thumbnailImage}
                        alt={`Image ${index + 1}`}
                        className={`thumbnail ${selectedImageIndex === index ? 'active' : ''}`}
                        draggable="false"
                        onClick={() => handleThumbnailClick(index)}
                        width="50px"
                        height="50px"
                    />
                ))}
            </div>
        </div>
    );
};

export default ThumbnailGallery;