import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='sticy top-0 bg-white px-12 py-8 flex justify-center md:justify-between'>
            <div className='hidden md:block'>
                <Link to="/" className='font-sans font-bold text-xl text-grey-600'>Dream Shop</Link>
            </div>
            <div className='flex text-xl gap-4'>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/reviews">Reviews</CustomLink>
                <CustomLink to="/dashboard">Dashboard</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </div>
        </div>
    );
};

export default Header;