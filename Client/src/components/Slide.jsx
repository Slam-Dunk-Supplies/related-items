import React, { useState } from 'react';

function Slide(props) {
    const [heartClicked, setHeartClicked] = useState(false)

  
    const clickedStyle = (color) => {
        return {
            color: color
        }
    }

    const clickHandler = () => {
        setHeartClicked(!heartClicked)
    };

    return (
        <div className='container'>
            <div id='picture'>
                <img src={props.products.image} />
                <button
                    id='heart'
                    style={heartClicked ? clickedStyle('white') : clickedStyle('black')}
                    onClick={clickHandler}
                >
                    ♥
                </button>
            </div>
            <div id='description'>
                <div id='category'>{props.products.category}</div>
                <div id='title'>
                    {props.products.title}
                </div>
                <div id='price'>
                    ${props.products.price}
                </div>
            </div>
        </div>
    )
}

export default Slide;