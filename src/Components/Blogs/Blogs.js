import React from 'react';

const Blogs = () => {
    return (
        <section className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
            <div className='grid grid-cols-1 gap-24 md:grid-cols-2'>
                <div>
                    <h1 className='mb-6 text-2xl font-bold text-gray-900 md:text-3xl'>
                        What is Context API?
                    </h1>

                    <p className='text-gray-600 font-semibold'>
                        The Context API is a React structure that enables you to exchange unique
                        details and assists in solving prop-drilling from all levels of your application.
                        The React Context API is a way for a React app to effectively produce
                        global variables that can be passed around.
                        This is the alternative to "prop drilling" or moving props from
                        grandparent to child to parent, and so on.
                    </p>

                </div>
                <div>
                    <h1 className='mb-6 text-2xl font-bold md:text-3xl'>
                        What is Semantic tags?
                    </h1>

                    <p className='text-gray-600 font-semibold'>
                        Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page.
                        Text that is enclosed in the code tag is immediately recognized by the browser as some type of coding language.
                    </p>


                </div>
            </div>
        </section>
    );
};

export default Blogs;