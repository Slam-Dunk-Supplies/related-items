import React, { useEffect, useState } from 'react';

function ToggleBar(props) {

    const [hovered, setHovered] = useState(false)

    const mouseOverHandler = () => {
        setHovered(true)
    }

    const mouseLeaveHandler = () => {
        setHovered(false)
    }

    const unclickedStyle01 = {
        height: '1PX',
        width: '15PX',
        padding: '0PX',
        'borderRadius': '0PX',
        'border': 'none',
        'margin': '3PX',
        'backgroundColor': 'black',
        'outline': 'none',
        display: 'inline-block'

    }

    const clickedStyle01 = {
        height: '5PX',
        width: '15PX',
        padding: '0PX',
        'borderRadius': '0PX',
        'border': 'none',
        'margin': '3PX',
        'backgroundColor': 'black',
        'outline': 'none',
        display: 'inline-block'

    }

    return (
        <>
            <button
                style={props.currentSlideIndex === props.slideNum || hovered ? clickedStyle01 : unclickedStyle01}
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