import React, { useState } from 'react';

function ToggleBar(props) {

    const [buttonClicked, setButtonClicked] = useState(false)
    const [clicked, setClicked] = useState(false)

    const clickHandler = () => {
        if (clicked === false) {
        setButtonClicked(true)
        setClicked(true)
        } else {
            setButtonClicked(!buttonClicked)
            setClicked(!clicked)
        }

    };
    const mouseOverHandler = () => {
        if (buttonClicked!== true) {
        setButtonClicked(true)
        }
    }
    const mouseLeaveHandler = () => {
        if (clicked === false) {
        setButtonClicked(false)
        }
    }

    const unclickedStyle = {
        height: '1PX',
        width: '15PX',
        'border-radius': '0PX',
        'border': 'none',
        'margin': '3PX',
        'backgroundColor': 'black',
        'outline': 'none'
    }

    const clickedStyle = {
        height: '5PX',
        width: '15PX',
        'border-radius': '0PX',
        'border': 'none',
        'margin': '3PX',
        'backgroundColor': 'black',
        'outline': 'none'
    }
    
    return (
        <>
            <button id={props.buttonName}
                style={buttonClicked ? clickedStyle : unclickedStyle}
                onMouseOver = {mouseOverHandler}
                onMouseLeave = {mouseLeaveHandler}
                onClick={() => {
                    clickHandler();
                    props.toggle(props.slideNum);
                }}
                >
            </button>
        </>
    )
}

export default ToggleBar;