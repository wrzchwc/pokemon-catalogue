import React from 'react';

const Sprite = (props) => {
  return (
      <img src={props.src} alt="sprite" style={props.style}/>
  );
}

export default Sprite;