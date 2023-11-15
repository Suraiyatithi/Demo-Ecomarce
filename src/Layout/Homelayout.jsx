import React from 'react';
import CategoryProduct from '../Home/CategoryProduct';
import Feature from '../Home/Feature';
import Blog from '../Home/Blog';
import Footer from '../Home/Footer';

const Homelayout = () => {
    return (
        <div>
            <CategoryProduct></CategoryProduct>
            <Feature></Feature>
            <Blog></Blog>
            <Footer></Footer>
        </div>
    );
};

export default Homelayout;