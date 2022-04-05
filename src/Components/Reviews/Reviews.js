import React from 'react';
import Product from '../Product/Product';
import useReviews from '../../hook/useReviews';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();


    return (
        <div>
            <h1 className="text-center text-4xl m-4">Customer Reviews</h1>

            <div className='bg-slate-200 grid grid-cols-3 gap-4'>
                {
                    reviews.map(review => <Product
                        key={review.id}
                        review={review}
                    ></Product>)
                }

            </div>
        </div>
    );
};

export default Reviews;