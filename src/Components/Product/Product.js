import React from 'react';

const Product = (props) => {
    console.log(props)
    const { name, img, comment, ratings } = props.review;

    return (
        <div className='flex'>
            <div className='shadow-lg rounded-2xl w-[400px] p-4 bg-white mb-5 gap-4'>
                <div className='flex-shrink-0'>
                    <div>
                        <img src={img} alt="" />
                    </div>
                </div>

                <div className='flex flex-col justify-center'>
                    <span className='text-gray-600 font-medium'>Name: {name}</span>
                    <span className='text-gray-400 font-semibold text-sm mt-2'>Comment: {comment}</span>
                    <span className='text-gray-400 font-semibold text-base mt-2'>Ratings: {ratings}</span>
                </div>
            </div>


        </div >

    );
};

export default Product;