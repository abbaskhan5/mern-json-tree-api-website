import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProductList({ setLoading }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response.data.products);
        setLoading(false);
        console.log("All products loaded:", response.data.products);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setError('Failed to load products');
        setLoading(false);
      });
  }, [setLoading]);

  return (
    <div className="my-5">
      <h2 className="text-2xl text-center my-4">All Products</h2>
      {error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="p-4 shadow-lg rounded border">
              <img src={product.thumbnail} alt={product.title} className="h-40 w-full object-cover mb-3 rounded" />
              <h3 className="text-lg font-bold">{product.title}</h3>
              <p className="text-gray-600">${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
