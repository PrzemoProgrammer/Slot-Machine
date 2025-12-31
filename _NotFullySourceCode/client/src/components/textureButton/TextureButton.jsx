import React, { useRef, useImperativeHandle, useState } from 'react';
import "./CSS/TextureButton.css";

const TextureButton = React.forwardRef((props, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isPush, setIsPush] = useState(false);

    const extension = props.svg ? ".svg" : ".png"
    const path = "\\assets\\images\\UI\\buttons\\"
    const defaultTexture = path + props.default + extension;
    const hoverTexture = path + props.hover + extension;
    const pushTexture = path + props.push + extension 

    const handleButtonHover = () => {
        setIsHovered(true);
      };
      
      const handleButtonLeave = () => {
        setIsHovered(false);
      };

      const handleClick = () => {
        props.onClick()
      }

      const handleMouseDown = () => {
        setIsPush(true);
      };

      const handleMouseUp = () => {
        setIsPush(false);
      };

      const buttonImage = isPush ? pushTexture : (isHovered ? hoverTexture : defaultTexture);

    return (
        <div id="texture-button" >
            <img id={isHovered ? 'enlarged' : 'default'} onClick={handleClick}  src={buttonImage} onMouseEnter={handleButtonHover} onMouseLeave={handleButtonLeave} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} alt="button"/>
        </div>
    );
});

export default TextureButton;
