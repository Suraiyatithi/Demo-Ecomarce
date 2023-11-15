import React from 'react';
import img1 from '../assets/Food (1).png'
import img2 from '../assets/Food.png'
import img3 from '../assets/Fresh fruit bowl.png'
import img4 from '../assets/Rectangle 23.png';
import img5 from '../assets/Rectangle 24.png';
import img6 from '../assets/Rectangle 25.png'



const Blog = () => {
    return (
        <div className='sm:p-4 lg:p-10 md:p-6'>
                <div className="text-center font-bold text-3xl">
      <h1 className="relative inline-block">
        From The Blog
          <div className="absolute bottom-0 left-0 w-16 h-1 ml-20 bg-green-600 -mb-2"></div> </h1> </div>
          <div className="">
   

          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-2 lg:mt-16  ">
        <div className="card  bg-base-100">
  <div style={{width:'468px',height:"380px"}}  className="bg-[#FBF3BD]">
<figure><img className=' '  src={img1} alt="Shoes" /></figure>
  
    </div>
  <div className="card-body">
    <h2 className='text-slate-400 text-sm'>
    November 4,2023
      <div className="badge bg-slate-200 ml-16 text-sm text-slate-400">05</div>
    </h2>
    <h1 className="card-title">Cooking tips makes cooking simple</h1>
    <p className='text-sm text-slate-400'>We Provide you the authentic and fresh grosery we care about our
     client and theoir health</p>
  </div>
</div>
<div className="card  bg-base-100">
<div style={{width:'468px',height:"380px"}}  className="bg-[#FFD2C6]">
<figure><img className=' '  src={img2} alt="Shoes" /></figure>
  
    </div><div className="card-body">
    <h2 className='text-slate-400 text-sm'>
    November 4,2023
      <div className="badge bg-slate-200 ml-16 text-sm text-slate-400">05</div>
    </h2>
    <h1 className="card-title">Cooking tips makes cooking simple</h1>
    <p className='text-sm text-slate-400'>We Provide you the authentic and fresh grosery we care about our
     client and theoir health</p>
  </div>
</div>    <div className="card  bg-base-100">
<div style={{width:'468px',height:"380px"}}  className="bg-[#FCD3A2]">
<figure><img className=''  src={img3} alt="Shoes" /></figure>
  
    </div>
    <div className="card-body">
    <h2 className='text-slate-400 text-sm'>
    November 4,2023
      <div className="badge bg-slate-200 ml-16 text-sm text-slate-400">05</div>
    </h2>
    <h1 className="card-title">Cooking tips makes cooking simple</h1>
    <p className='text-sm text-slate-400'>We Provide you the authentic and fresh grosery we care about our
     client and theoir health</p>
  </div>
</div>

      </div>
        </div>
    );
};

export default Blog;