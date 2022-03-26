import React, { useEffect, useState } from 'react';
import Bat from '../Bat/Bat';

const Bats = () => {
    const [bats, setBats] = useState([]);

    useEffect(() => {
        fetch('bats.json')
            .then(res => res.json())
            .then(data => setBats(data))
    }, [])

    return (
        <div className='row'>
            {
                bats.map(bat => <Bat
                    bat={bat}
                    key={bat.id}
                ></Bat>)
            }
        </div>
    );
};

export default Bats;