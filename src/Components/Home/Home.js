import React from 'react';

const Home = () => {
    return (
        <section className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
            <div className='grid grid-cols-1 gap-24 md:grid-cols-2'>
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
                </div>
                <div>
                    <div className='w-full h-full bg-gray-200 rounded-lg'>
                        <img
                            src='https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/52b5fde5829a4a04820dacf50127b969_9366/Adicolor_Classics_Primeblue_SST_Track_Pants_Blue_H06714_21_model.jpg"'
                            alt=''
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;