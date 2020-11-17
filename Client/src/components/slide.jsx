import React from 'react';

function Slide(props) {
    return (
        <div id='container'>
            <div id='picture'>
                <img src={props.products.image} />
            </div>
            <div id='category'>{props.products.category}</div>
            <div id='title'>{props.products.title}</div>
            <div id='price'>${props.products.price}</div>
        </div>
    )
}

export default Slide;