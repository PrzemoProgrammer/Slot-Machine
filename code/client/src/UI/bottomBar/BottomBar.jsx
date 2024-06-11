import React, { useState, useImperativeHandle, useRef, useEffect } from "react";
import "./CSS/BottomBar.css";
import gsap from 'gsap';
import BetLabel from './betLabel/BetLabel.jsx';
import Balance from './balance/Balance.jsx'
import Options from './options/Options.jsx'

const BottomBar = React.forwardRef((props, ref) => {
    const [state, setState] = useState({
        bottom: '0px',
        height: 100
    });
    const bottomBarRef = useRef(null);
    const betLabelRef = useRef(null);
    const balanceRef = useRef(null);

    const update = (newData) => {
        betLabelRef.current.update(newData)
        balanceRef.current.update(newData.credits)
    }

    const updateBalanceValue = (newValue) => {
         balanceRef.current.update(newValue)
     }

     const getBalanceValue = () => {
        return balanceRef.current.getValue()
     }

    const getBetValue = () => {
        return betLabelRef.current.getBetValue()
     }

    const hasSufficientBalanceForSpin = (balance) => {
        return betLabelRef.current.hasSufficientBalance(balance)
     }

     const calculateAndUpdateBalance = (betValue) => {
        return balanceRef.current.calculateAndUpdateBalance(betValue)
     }
     
    useEffect(() => {
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const resize = (resizeData) => {
        setState((prevState) => ({
            ...prevState,
            ...resizeData
        }));
    };

    const getHeight = () => {
        return state.height
    }

    const startOpenTween = () => {
        gsap.fromTo(
            bottomBarRef.current,
            { scale: 0 },
            { scale: 1, ease: "back.out", duration: 1 })
    }

    const onResize = () => {

    }

    useImperativeHandle(ref, () => ({
        resize,
        getHeight,
        startOpenTween,
        hasSufficientBalanceForSpin,
        calculateAndUpdateBalance,
        getBetValue,
        updateBalanceValue,
        update,
        getBalanceValue
    }));

    return (
        <div id="bottom-bar" style={state} ref={bottomBarRef}>
            <div id="separate-container">
                <Balance ref={balanceRef}/>
            </div>
            <div id="separate-container">
               <BetLabel ref={betLabelRef}/>
            </div>
            <div id="separate-container">
                <Options/>
            </div>
        </div>
    );
});

export default BottomBar;
