import React from 'react';
import Bats from '../Bats/Bats';
import Selection from '../Selection/Selection'
import './Shop.css'

const Shop = () => {
    return (
        <div className='row mt-5 container'>
            <div className='col-lg-10 col-9'>
                <Bats></Bats>
            </div>
            <div className='col-lg-2 col-2'>
                <Selection></Selection>
            </div>
        </div>
    );
};

export default Shop;