import React from 'react';
import Marquee from "react-fast-marquee";



const LatestNews = () => {
    return (
        <div className='flex  bg-[#F3F3F3] '>
            <div className='flex ml-2 py-4 gap-5 items-center'>
                <p className='bg-[#D72050]  text-base-100 px-3 py-2 ml-5 font-bold ' >Latest</p>
                <Marquee pauseOnHover={true} className='space-x-2'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur culpa ab rem itaque natus ducimus in assumenda est molestiae dolore libero eos a esse unde, maiores laborum incidunt! Voluptates, sed!</p>

                </Marquee>

            </div>


        </div>
    );
};

export default LatestNews;