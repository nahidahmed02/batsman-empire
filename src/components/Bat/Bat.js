import React from 'react';

const Bat = (props) => {
    const { photo, name, price } = props.bat;
    console.log(photo);
    return (
        <div className='col-lg-4 col-12 g-1'>
            <div className="card h-100">
                <img className='card-img-top p-2' src={photo} alt="" />
                <div className="card-body card-footer">
                    <h5 className="card-title">Name: {name}</h5>
                    <h6 className="card-title">Price: ${price}</h6>
                </div>
                <button className='btn btn-outline-info'>ADD TO CART</button>
            </div>
        </div>
    );
};

export default Bat;