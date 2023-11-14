import React, { useState, useEffect } from 'react';

const CategoryProduct = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on selected category
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === selectedCategory);
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, products]);

  // Handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div  className="sm:p-6 md:p-12 lg:p-20 xl:p-32">
      <div className="text-center font-bold text-3xl">
      <h1 className="relative inline-block">
          Feature Product
          <div className="absolute bottom-0 left-0 w-16 h-1 ml-20 bg-green-600 -mb-2"></div> </h1> </div>
      <div className='text-center mt-8'>
        <button
          className={`m-4 ${selectedCategory === 'All' ? ' border-b-2 border-green-600' : ''}`}
          onClick={() => handleCategoryChange('All')}> All </button>
        <button className={`m-4 ${selectedCategory === 'electronics' ? ' border-b-2 border-green-600' : ''}`}
          onClick={() => handleCategoryChange('electronics')}>Electronics </button>
        <button className={`m-4 ${selectedCategory === 'jewelery' ? ' border-b-2 border-green-600' : ''}`}
          onClick={() => handleCategoryChange('jewelery')} >Jewelry </button>
        <button className={`m-4 ${selectedCategory === "men's clothing" ? ' border-b-2 border-green-600' : ''}`}
          onClick={() => handleCategoryChange("men's clothing")} > Men's Clothing</button>
        <button  className={`m-4 ${selectedCategory === "women's clothing" ? ' border-b-2 border-green-600' : ''}`}
          onClick={() => handleCategoryChange("women's clothing")} >Women's Clothing </button>
      </div>

      {/* Display products */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 lg:mt-16 text-center ">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white  rounded-md  mb-2 p-14">
            <div className=" lg:w-[307px] lg:h-[347px] ">
              <img style={{maxWidth:"307px",maxHeight:"347px"}} className='w-56 ' src={product.image} alt={product.title} />
            </div>
            <h3 className="text-[12] text-[#777777] font-semibold mb-2">{product.title}</h3>
            <p className="text-[#353535] font-bold">${product.price}</p>
            {/* Add more details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};
export default CategoryProduct;
