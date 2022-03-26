import React, { useEffect, useState } from 'react';
import Bat from '../Bat/Bat';
import Selection from '../Selection/Selection'
import './Shop.css'

const Shop = () => {
    const [bats, setBats] = useState([]);

    useEffect(() => {
        fetch('bats.json')
            .then(res => res.json())
            .then(data => setBats(data))
    }, [])

    return (
        <div className='row mt-5  ms-5 me-5'>
            <div className='col-lg-10 col-9'>
                <div className='row'>
                    {
                        bats.map(bat => <Bat
                            key={bat.id}
                            bat={bat}
                        ></Bat>)
                    }
                </div>
            </div>
            <div className='col-lg-2 col-3'>
                <Selection></Selection>
            </div>
        </div>
    );
};

export default Shop;