import React from 'react';
import './Selection.css'

const Selection = (props) => {
    const { resetBtn } = props;
    const { selection } = props;

    const name = selection.map(bat => bat.name);

    return (
        <div className='card ps-1 pe-1 selected'>
            <h4>Bats You Picked</h4>
            <h6 className='my-3'>{name}</h6>
            <button className='btn btn-success mb-2'>CHOOSE 1 FOR ME</button>
            <button onClick={resetBtn} className='btn btn-danger mb-2'>RESET</button>
        </div>
    );
};

export default Selection;