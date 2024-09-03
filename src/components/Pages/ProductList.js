import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Đảm bảo đã cài đặt axios

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5196/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="product-list">
            <h2>Product List</h2>
            <ul>
                {products.map(product => (
                    <li key={product.productID}>
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.startingPrice}</p>
                        <p>Bid Increment: ${product.bidIncrement}</p>
                        <p>Duration: {product.auctionDuration}</p>
                        <p>Shipping Method: {product.shippingMethod}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
