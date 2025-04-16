import React, { useEffect, useState } from 'react'
import "./Products.css"
import ProductsData from "../../../Data/Products.json";
import { Link } from "react-router-dom"

const imagePath = (imageName) => {
    try {
        return `../../../assets/${imageName}`;
    } catch (err) {
        return null;
    }
};

export const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(ProductsData);
    }, []);

    return (
        <div className='products'>
            <div className='box-container'>
                {ProductsData.map(product => (
                    <div className='box' key={product.id}>
                        <Link to="/urunler" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <a href={product.link} key={product.id} className='product-link' target='_blank'>
                                <div className='image'>
                                    <img src={imagePath(product.image)} alt={product.title} />
                                    <div className='overlay'>

                                        <div className='text'>Daha Fazla</div>

                                    </div>
                                </div>
                            </a>
                            <div className='content'>
                                <h4>{product.name}</h4>
                                <h5>{product.price}</h5>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;