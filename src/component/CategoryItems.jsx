import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function CategoryItems({ category, setLoading }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (category) {
      setLoading(true);
      axios.get(`https://dummyjson.com/products/category/${category}`)
        .then(response => {
          setItems(response.data.products);
          setLoading(false);
          console.log("Items loaded for category:", category, response.data.products);
        })
        .catch(error => {
          console.error(`Error fetching items for ${category}:`, error);
          setError(`Failed to load items for ${category}`);
          setLoading(false);
        });
    }
  }, [category, setLoading]);

  return (
    <div className="my-5">
      <h2 className="text-2xl text-center my-4">Items in "{category}"</h2>
      {error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="p-4 shadow-lg rounded border">
              <img src={item.thumbnail} alt={item.title} className="h-40 w-full object-cover mb-3 rounded" />
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-gray-600">${item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
