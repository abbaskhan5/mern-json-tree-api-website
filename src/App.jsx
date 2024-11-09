import React, { useState } from 'react';
import Categories from './component/Categories';
import CategoryItems from './component/CategoryItems';
import ProductList from './component/ProductList';
import Footer from './component/Footer';
import Navegation from './component/Navegation';
export default function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCategorySelection = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <Navegation/>
      <h1 className="text-center text-4xl my-5">Product Categories</h1>
      <Categories setSelectedCategory={handleCategorySelection} setLoading={setLoading} />
      
      {/* Loading spinner */}
      {loading && <p className="text-center text-lg">Loading...</p>}
      
      {/* Show all products if no category is selected */}
      {!loading && !selectedCategory ? (
        <ProductList setLoading={setLoading} />
      ) : (
        <CategoryItems category={selectedCategory} setLoading={setLoading} />
      )}
      <Footer/>
    </div>
  );
}
