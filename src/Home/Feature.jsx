
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import React, { useRef, useState ,useEffect } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import {  Pagination } from 'swiper/modules';
import { FaBeer ,FaGreaterThan,FaLessThan} from 'react-icons/fa';




const ProductGroup = ({ title, products }) => {
    const [slideBegOrNot, handleSlideByState] = useState({
                isFirst: true,
                isLast: false,
             });
             const SlideRef = useRef();
          
             const handleNext = () => {
                SlideRef.current.swiper.slideNext();
             };
          
             const handlePrev = () => {
                SlideRef.current.swiper.slidePrev();
             };
          
             const onSlideChange = (swiper) => {
                handleSlideByState({
                   isFirst: swiper.isBeginning,
                   isLast: swiper.isEnd,
                });
             };
          
             const { isLast, isFirst } = slideBegOrNot;
return(
  <div className=" ">
 <div className="flex justify-between pr-8 pl-6">
 <h3 className="text-left text-3xl font-bold ">{title}</h3>
    <div className="bs-icons">
                        <button 
                       className={`Arrow ${isFirst ? 'disabled bg-[#F3F6FB]  p-3' : 'bg-[#F3F6FB] text-green-600  p-3'}`}
                         onClick={handlePrev}><FaLessThan></FaLessThan></button>
                        
                      <button
                        className={`Arrow ${isLast ? 'disabled bg-[#F3F6FB]  p-3 ml-3' : 'bg-[#F3F6FB] text-green-600 p-3 ml-3'}`}
                          onClick={handleNext}><FaGreaterThan></FaGreaterThan></button>
                          </div> 
 </div>
  
    <Swiper
        slidesPerView={1}
        spaceBetween={0}
         className={'mySwiper'}
        ref={SlideRef}
         onSlideChange={onSlideChange}
        pagination={{
            el: '.swiper-paginations',
           type: 'fraction',
     }}
        navigation={false}
        modules={[Pagination, Navigation]}
       >
      {products.map((group, index) => (
        <SwiperSlide key={index}>
          <div className="grid grid-cols-1  ">
            {group.map((product, innerIndex) => (
              <div key={innerIndex} className="text-center p-6">
                <div className="flex justify-between">
                  <img className="m-1 p-2 border border-info w-32 h-24" src={product.image} alt="" />
                  <div className="p-3">
                    <p className='text-[#777777]'>{product.title}</p>
                    <p>${product.price}</p>
                  </div>
                </div>
                {/* Add more content as needed */}
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);
};

const Feature = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  const chunkedProducts = chunkArray(products, 4);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:p-6 md:p-12 lg:p-20 xl:p-32">
      {[...Array(3)].map((_, index) => (
        <ProductGroup key={index} title="Feature Product" products={chunkedProducts} />
      ))}
    </div>
  );
};

export default Feature;









