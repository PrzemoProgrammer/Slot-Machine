import React, { useRef, useImperativeHandle, useState } from 'react';
import "./CSS/CloseButton.css";

const CloseButton = React.forwardRef((props, ref) => {

    return (
        <button id="close-button" onClick={props.onClick}>
           <svg fill="#D3D3D3" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" >
            <path d="M1082.2,896.6l410.2-410c51.5-51.5,51.5-134.6,0-186.1s-134.6-51.5-186.1,0l-410.2,410L486,300.4
	        c-51.5-51.5-134.6-51.5-186.1,0s-51.5,134.6,0,186.1l410.2,410l-410.2,410c-51.5,51.5-51.5,134.6,0,186.1
	        c51.6,51.5,135,51.5,186.1,0l410.2-410l410.2,410c51.5,51.5,134.6,51.5,186.1,0c51.1-51.5,51.1-134.6-0.5-186.2L1082.2,896.6z"/>
            </svg>
        </button>
    );
});

export default CloseButton;
