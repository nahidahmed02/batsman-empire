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
                    randomBtn={randomBtn}
                    resetBtn={resetBtn}
                ></Selection>
            </div>
        </div>
    );
};

export default Shop;