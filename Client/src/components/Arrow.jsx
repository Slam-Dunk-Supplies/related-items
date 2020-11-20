import React from 'react';

function Arrow(props) {

  return (
    <div className="vertical-center">
      <button
        className="vertical-center"
        id={`slide-arrow-${props.direction}`}
        onClick={props.clickFunction}>
        { props.glyph}
      </button>
    </div>
  )
}

export default Arrow;