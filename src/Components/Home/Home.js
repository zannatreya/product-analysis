import React from 'react';
import laptop from '../images/laptop.jpg'
import UseReviews from '../../Hooks/UseReviews';

const Home = () => {
    const [reviews, setReviews] = UseReviews();
    const handleAddToCart = (selectedItem) => {
        const newCart = [...reviews, selectedItem];
        setReviews(newCart);
    }
    return (
        <section className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
            <div className='grid grid-cols-1 gap-24 md:grid-cols-2 '>
                <div>
                    <h1 className='mb-6 text-2xl font-light text-gray-900 md:text-3xl'>
                        Basic Questions
                    </h1>

                    <p className='text-gray-600'>
                        This article starts off the module with a good look at what
                        accessibility is — this includes what groups of people we need to
                        consider and why, what tools different people use to interact with
                        the web, and how we can make accessibility part of our web
                        development workflow.
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
                <div>

                </div>
                <button onClick={() => handleAddToCart()} className='py-2 px-3 text-white mt-3 rounded-full bg-cyan-600'>See All Reviews</button>
            </div>
        </section>
    );
};

export default Home;