import React, { useState, useImperativeHandle} from "react";
import "./CSS/Balance.css";

const Balance = React.forwardRef((props, ref) => {
    const [balanceValue, setBalanceValue] = useState(0);

    const update = (newValue) => {
        setBalanceValue(newValue)
    }

    const getValue = () => {
        return balanceValue
    }

    const calculateAndUpdateBalance = (betValue) => {
        const newBalance = balanceValue - betValue
        setBalanceValue(newBalance)
    }

    useImperativeHandle(ref, () => ({
        update,
        getValue,
        calculateAndUpdateBalance
    }));

    return (
        <div  id="balance-container">
            <h1 id="title">Balance</h1>
            <h1 id="value">{balanceValue.toFixed(2)}★</h1>
        </div>
    );
});

export default Balance;
