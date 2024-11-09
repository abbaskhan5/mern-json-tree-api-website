import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Categories({ setSelectedCategory, setLoading }) {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get('https://dummyjson.com/products/categories')
      .then(response => {
        setCategories(response.data);
        setLoading(false);
        console.log("Categories loaded:", response.data); 
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
        setError('Failed to load categories');
        setLoading(false);
      });
  }, [setLoading]);

  return (
    <div className="flex flex-wrap justify-center gap-4 my-5">
      <button
        onClick={() => setSelectedCategory(null)}
        className="bg-blue-400 text-white p-2 rounded"
      >
        Show All Products
      </button>
      {error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        categories.map((category, index) => (
          <button
            key={category.slug || `category-${index}`}
            onClick={() => setSelectedCategory(category.slug)}
            className="bg-yellow-400 text-white p-2 rounded"
          >
            {category.name || 'Unknown Category'}
          </button>
        ))
      )}
    </div>
  );
}
