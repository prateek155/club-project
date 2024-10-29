import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { slug } = useParams(); // Get the product slug from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details based on the slug
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/products/${slug}`); // Fetch product from your API
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [slug]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
    </div>
  );
};

export default ProductDetail;
