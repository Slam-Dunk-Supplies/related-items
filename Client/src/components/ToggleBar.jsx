import React, { useEffect, useState } from 'react';

function ToggleBar(props) {

    const [buttonClicked, setButtonClicked] = useState(false)
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        if (props.currentSlideIndex === props.slideNum) {
            setButtonClicked(true)
            setClicked(true)
        }
    })

    const mouseOverHandler = () => {
            setButtonClicked(true)
    }
    const mouseLeaveHandler = () => {
        if (clicked === false) {
            setButtonClicked(false)
        }
    }

    const unclickedStyle01 = {
        height: '1PX',
        width: '15PX',
        'borderRadius': '0PX',
        'border': 'none',
        'margin': '3PX',
        'backgroundColor': 'black',
        'outline': 'none'
    }

    const clickedStyle01 = {
        height: '5PX',
        width: '15PX',
        'borderRadius': '0PX',
        'border': 'none',
        'margin': '3PX',
        'backgroundColor': 'black',
        'outline': 'none'
    }

    return (
        <>
            <button
                style={buttonClicked ? clickedStyle01 : unclickedStyle01}
                onMouseOver={mouseOverHandler}
                onMouseLeave={mouseLeaveHandler}
                onClick={() => {
                    props.toggle(props.slideNum);
                }}
            >
            </button>
        </>
    )
}

export default ToggleBar;