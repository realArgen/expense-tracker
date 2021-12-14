import React from "react";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";



const Balance = () => {

    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map((elem) => elem.amount);

    const total = amounts.reduce((acc, rec) => {
        return (acc += rec)
    }, 0);

    return (
        <div>
            <h4>Your Balance</h4>
            <h1>{total.toFixed(2)}$</h1>
        </div>
    )
}

export default Balance;