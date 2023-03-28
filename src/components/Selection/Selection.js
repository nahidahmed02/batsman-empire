import React from 'react';
import './Selection.css'

const Selection = (props) => {
    const { resetBtn, selection, randomBtn } = props;

    const name = selection.map(bat => <ul><li key={bat.id} className='my-3'>{bat.name}</li></ul>);

    return (
        <div className='card px-2 py-3 p-lg-3 selected'>
            <h4 className='text-center'>Bats You Picked</h4>
            <hr className='mt-0 mb-2' />
            <h6>{name}</h6>
            <button onClick={randomBtn} className='btn btn-success mb-2'>CHOOSE 1 FOR ME</button>
            <button onClick={resetBtn} className='btn btn-danger mb-2'>RESET</button>
        </div>
    );
};

export default Selection;