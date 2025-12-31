import React, { useRef,  useState, useImperativeHandle } from 'react';
import "./CSS/Pages.css";
import LoadingScreen from "./loadingScreen/LoadingScreen";
import LoginScreen from "./loginScreen/LoginScreen";
import LoadingGame from "./loadingGame/LoadingGame";
import GameInformation from "./gameInformation/GameInformation";

const Pages = React.forwardRef((props, ref) => {
    const [responsiveState, setResponsiveState] = useState({
        width: '0px',
        height: '0px',
        left: '0px',
        top: '0px',
        transform: 'none',
        display: 'none'
    });
    const [active, setActive] = useState(true);
    const [loadingScreenVisible, setLoadingScreenVisible] = useState(false);
    const [loginScreenVisible, setLoginScreenVisible] = useState(false);
    const [loadingGameVisible, setLoadingGameVisible] = useState(true);
    const [gameInformationVisible, setGameInformationVisible] = useState(false);

    const loadingScreenRef = useRef(null);
    const loginScreenRef = useRef(null);
    const loadingGameRef = useRef(null);
    const gameInformationRef = useRef(null);

    const handleLoadingPageVisible =(value) => {
        setLoadingScreenVisible(value);
    }

    const handleGameInformationVisible = async (value) => {
        setGameInformationVisible(value);
        setPointerEventActive(true)
    }

    const handleLoginPageVisible = (value) => {
        setLoginScreenVisible(value);
    }

    const handleLoadingGameVisible = (value) => {
        setLoadingGameVisible(value)
    }

    const handleLobbyPageVisible = (value) => {
        if(value === false) lobbyScreenRef.current.removeListeners()
        setLobbyScreenVisible(value)
    }

    const resize = (resizeData) => {
        setResponsiveState(resizeData);
    }

    const setPointerEventActive = (value) => {
        setActive(value)
    }

    useImperativeHandle(ref, () => ({
        handleLoadingPageVisible,
        handleLoginPageVisible,
        handleLoadingGameVisible,
        handleLobbyPageVisible,
        setPointerEventActive,
        handleGameInformationVisible,
        resize
    }));
    const { width, height, left, top, transform, display } = responsiveState
    const style = { width, height, left, top, transform, display };

    return (
        <div id={active === true ? "pages" :"pages-not-active"} ref={ref} style={style}>
           {loadingGameVisible &&  <LoadingGame ref={loadingGameRef}/>}
            {loginScreenVisible && <LoginScreen ref={loginScreenRef}/>}
           {loadingScreenVisible &&  <LoadingScreen ref={loadingScreenRef}/>}
           {gameInformationVisible &&  <GameInformation ref={gameInformationRef}/>}
        </div>
    );
});

export default Pages;