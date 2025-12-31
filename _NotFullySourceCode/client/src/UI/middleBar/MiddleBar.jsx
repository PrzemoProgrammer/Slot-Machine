import React, {
    useRef,
    forwardRef,
    useImperativeHandle,
} from "react";
import gsap from 'gsap';
import "./CSS/MiddleBar.css";
import SpinButton from '../bottomBar/spinButton/SpinButton';

const MiddleBar = forwardRef((props, ref) => {
    const spinButtonRef = useRef(null);
    const middleBarRef = useRef(null);   

    const startOpenTween = () => {
        gsap.fromTo(
            middleBarRef.current,
            { scale: 0 },
            { scale: 1, ease: "back.out", duration: 1 })
    }

    const handleSpinButtonBlock = (state) => {
        return spinButtonRef.current.block(state)
     }
     const resetSpinButton = () => {
        return spinButtonRef.current.reset()
     }

    useImperativeHandle(ref, () => ({
        update,
        handleSpinButtonBlock,
        resetSpinButton,
        startOpenTween
    }));

    return (
        <div id="middle-bar" ref={middleBarRef}>
            <div id="free-spins-container">
            </div>
            <div id="spin-button-container">
                <SpinButton  ref={spinButtonRef}  default="spin_button" hover="spin_button_hover" push="spin_button_push" svg="true"/>
            </div>
        </div>
    );
});

export default MiddleBar;
