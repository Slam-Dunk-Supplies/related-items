import React, { useEffect, useState } from 'react';

function ToggleBar(props) {

    const [hovered, setHovered] = useState(false)

    const mouseOverHandler = () => {
        setHovered(true)
    }

    const mouseLeaveHandler = () => {
        setHovered(false)
    }

    const clickedStyle = (pixel) => {
        return {
            height: pixel
        }
    }

    return (
        <>
            <button
                className="toggle-bar-button"
                style={props.currentSlideIndex === props.slideNum || hovered ? clickedStyle('5PX') : clickedStyle('1PX')}
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