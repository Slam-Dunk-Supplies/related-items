import React, { useState } from 'react';

function Slide(props) {
    const [heartClicked, setHeartClicked] = useState(false)
    
    const unclickedStyle = {
        borderRadius: '0px',
        color: 'black',
        background:'none',
        border: 'none',
        position: 'relative',
        left: '140px',
        top:'-170px',
        'zIndex': '1',
        outline: 'none',
    }

    const clickedStyle = {
        borderRadius: '0px',
        color: 'white',
        background:'none',
        border: 'none',
        position: 'relative',
        left: '140px',
        top:'-170px',
        'zIndex': '1',
        outline: 'none',
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
                style={heartClicked ? clickedStyle: unclickedStyle } 
                onClick = {clickHandler}
                >
                    ♥
                </button>
            </div>
            <div id='category'>{props.products.category}</div>
            <div id='title'>{props.products.title}</div>
            <div id='price'>${props.products.price}</div>
        </div>
    )
}

export default Slide;
