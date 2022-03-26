import React from 'react';
import './Selection.css'

const Selection = () => {
    return (
        <div className='card ps-1 pe-1 selected'>
            <h4>Bats You Picked</h4>
            <button className='btn btn-success mb-2'>CHOOSE 1 FOR ME</button>
            <button className='btn btn-danger mb-2'>RESET</button>
        </div>
    );
};

export default Selection;