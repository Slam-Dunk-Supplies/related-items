import React, { useEffect, useState } from 'react';

function ToggleBar(props) {

    const [buttonClicked, setButtonClicked] = useState(false)
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        if (props.currentSlideIndex === props.slideNum) {
            setButtonClicked(true)
            setClicked(true)
        } else {
            setButtonClicked(false)
            setClicked(false)
        }
    })

    const mouseOverHandler = () => {
        if(clicked===false) {
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
                // onMouseOver={mouseOverHandler}
                // onMouseLeave={mouseLeaveHandler}
                onClick={() => {
                    // clickHandler();
                    props.toggle(props.slideNum);
                }}
            >
            </button>
        </>
    )
}

export default ToggleBar;