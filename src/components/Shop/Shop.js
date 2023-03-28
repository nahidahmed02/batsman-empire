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
        const selected = selection.find(x => x.id === bat.id);

        if (selection.length === 4) {
            return;
        }
        else if (selected) {
            return
        }
        else {
            const newSelection = [...selection, bat];
            setSelection(newSelection);
        }
    }

    const randomBtn = () => {
        const random = Math.floor(Math.random() * selection.length);
        alert(`You may choose ${selection[random].name}`);
    }

    const resetBtn = () => {
        setSelection([])
    }

    return (

        <div className='row mt-4 mt-lg-5 mx-2 mx-lg-5'>
            <div className='col-lg-9 col-6'>
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

            <div className='col-lg-3 col-6 mt-2'>
                <Selection
                    selection={selection}
                    randomBtn={randomBtn}
                    resetBtn={resetBtn}
                ></Selection>
            </div>
        </div>
    );
};

export default Shop;