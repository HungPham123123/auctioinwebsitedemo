import React, { useState } from 'react';
import './CreateAuction.css';
import axios from 'axios'; // Ensure axios is installed

function CreateProductForm() {
    const [images, setImages] = useState([null, null, null]);
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        description: '',
        startingPrice: '',
        bidIncrement: '',
        productDuration: '', // Renamed to productDuration
        shippingMethod: '',
    });

    const handleImageChange = (index, event) => {
        const file = event.target.files[0];
        if (file) {
            const newImages = [...images];
            newImages[index] = URL.createObjectURL(file);
            setImages(newImages);
        }
    };

    const triggerFileInput = (index) => {
        document.getElementById(`fileInput${index}`).click();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5196/api/products', formData);
            console.log('Product created:', response.data);
            // Clear the form or display a success message
            setFormData({
                title: '',
                category: '',
                description: '',
                startingPrice: '',
                bidIncrement: '',
                productDuration: '', // Renamed to productDuration
                shippingMethod: '',
            });
            setImages([null, null, null]);
        } catch (error) {
            console.error('Error creating product:', error);
        }
    };

    return (
        <div className="form-container">
            <h2 className="form-title">Create New Product</h2>
            <form className="auction-form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Product title" 
                    className="input-field title" 
                    value={formData.title}
                    onChange={handleChange}
                />
                <select 
                    name="category" 
                    className="input-field category" 
                    value={formData.category}
                    onChange={handleChange}
                >
                    <option value="">Category</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Antiques">Antiques</option>
                    <option value="Collectibles">Collectibles</option>
                    <option value="Art">Art</option>
                    <option value="Fashion">Fashion</option>
                </select>
                
                <textarea 
                    name="description" 
                    placeholder="Description" 
                    className="input-field description"
                    value={formData.description}
                    onChange={handleChange}
                ></textarea>
                
                <div className="image-upload">
                    {images.map((image, index) => (
                        <div key={index} className="image-placeholder" onClick={() => triggerFileInput(index)}>
                            {image ? <img src={image} alt={`Upload Preview ${index + 1}`} /> : (
                                <div className="add-image">
                                    <span>+</span>
                                </div>
                            )}
                            <input
                                type="file"
                                id={`fileInput${index}`}
                                style={{ display: 'none' }}
                                onChange={(event) => handleImageChange(index, event)}
                            />
                        </div>
                    ))}
                </div>

                <input 
                    type="number" 
                    name="startingPrice" 
                    placeholder="Starting price" 
                    className="input-field starting-price" 
                    value={formData.startingPrice}
                    onChange={handleChange}
                />
                <input 
                    type="number" 
                    name="bidIncrement" 
                    placeholder="Bid increment" 
                    className="input-field bid-increment" 
                    value={formData.bidIncrement}
                    onChange={handleChange}
                />
                
                <div className="product-duration-section">
                    <label className="product-duration-label">Product Duration</label>
                    <input 
                        type="date" 
                        name="productDuration" 
                        className="input-field product-duration" 
                        value={formData.productDuration}
                        onChange={handleChange}
                    />
                </div>

                <div className="shipping-method-section">
                    <label className="shipping-method-label">Shipping Method</label>
                    <input 
                        type="text" 
                        name="shippingMethod" 
                        placeholder="Enter shipping method" 
                        className="input-field shipping-method" 
                        value={formData.shippingMethod}
                        onChange={handleChange}
                    />
                </div>
                
                <button type="submit" className="submit-button">Create Product</button>
            </form>
        </div>
    );
}

export default CreateProductForm;
