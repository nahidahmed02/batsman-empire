import React, { useEffect, useState } from 'react';
import Bat from '../Bat/Bat';
import Selection from '../Selection/Selection'
import './Shop.css'

const Shop = () => {
    const [bats, setBats] = useState([]);
    const [selection, setSelection] = useState([]);
    useEffect(() => {
        fetch('bats.json')
            .then(res => res.json())
            .then(data => setBats(data))
    }, []);

    const handleAddBtn = (bat) => {

        if (selection.length === 4) {
            return;
        }
        else {
            const newSelection = [...selection, bat];
            setSelection(newSelection);
        }
    }

    const resetBtn = () => {
        setSelection([])
    }
    return (
        <div className='row mt-5  ms-5 me-5'>
            <div className='col-lg-10 col-7'>
                <div className='row'>
                    {
                        bats.map(bat => <Bat
                            key={bat.id}
                            bat={bat}
                            handleAddBtn={handleAddBtn}
                        ></Bat>)
                    }
                </div>
            </div>
            <div className='col-lg-2 col-5'>
                <Selection
                    selection={selection}
                    resetBtn={resetBtn}
                ></Selection>
            </div>
        </div>
    );
};

export default Shop;