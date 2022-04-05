import React from 'react';
import laptop from '../images/laptop.jpg'
import Product from '../Product/Product';
import useReviews from '../../hook/useReviews';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const [reviews, setReviews] = useReviews();
    const navigate = useNavigate();


    return (
        <section className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
            <div className='grid grid-cols-1 gap-24 md:grid-cols-2 '>
                <div>

                    <h1 className="text-4xl text-black">Your Next Laptop</h1>
                    <h1 className="text-4xl text-purple-600 mt-2 mb-4">Your Best Laptop</h1>

                    <p className='text-gray-600'>
                        This is a review site. You can review your any kind of Electronics
                        devices like smartphones, laptops, PC etc.
                        This is the best site for you that you can understand
                        which is the best products that you can buy.
                    </p>
                    <button className='py-2 px-3 text-white mt-3 rounded-full bg-cyan-600'>See more</button>

                </div>
                <div>
                    <div className='order-1 md:order-2 w-full h-full bg-gray-200 rounded-lg'>
                        <img src={laptop} alt="" />
                    </div>
                </div>
            </div>
            <div>
                <h1 className='mb-6 mt-12 text-3xl font-bold text-gray-900 md:text-3xl'>Customer Reviews</h1>
                <div className='bg-slate-200 grid grid-cols-3 gap-4 mt-3'>
                    {
                        reviews.slice(0, 3).map(review => <Product
                            key={review.id}
                            review={review}
                        ></Product>)
                    }

                </div>
                <button className='py-2 px-3 text-white mt-3 rounded-full bg-cyan-600' onClick={() => navigate("reviews")}>See All Reviews</button>
            </div>
        </section>
    );
};

export default Home;