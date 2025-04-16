import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavbar = () => {
           const [categories, SetCategory] = useState([]);

           useEffect(()=>{
            fetch("https://openapi.programming-hero.com/api/news/categories")
            .then( (res) => res.json())
            .then( (data) => SetCategory(data.data.news_category))
           },[]);

          


    return (
        <div>
            <h1 className='text-4xl font-bold mb-8' >All Category </h1>

            <div className='flex flex-col gap-2 mb-10'>
                {
                    categories.map((category) => ( <NavLink to={`/category/${category.category_id}`}
                        className='btn p-7  text-[#726d6d]  text-2xl font-medium'
                    
                    key={category.category_id}> 
                       {category.category_name}</NavLink>))
                }
            </div>
 
        </div>
    );
};

export default LeftNavbar;