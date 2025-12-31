import React, { useRef, useImperativeHandle } from 'react';
import "./CSS/LoadingGame.css";

const LoadingGame = React.forwardRef((props, ref) => {
    const loadingScreenRef = useRef(null);

    return (
        <div id="loading-game" ref={loadingScreenRef}>
            <img id="logo" src="\assets\images\game_logo.svg" alt="Loading_logo" />
            <img id="loading-icon" src="\assets\images\loading_game_anim.svg" alt="Loading_icon" />
        </div>
    );
});

export default LoadingGame;