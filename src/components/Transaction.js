import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";


// moneyFormatter

function moneyFormatter(num) {
    let p = num.toFixed(2).split('.');
    return (
        '$ ' +
        p[0]
            .split('')
            .reverse()
            .reduce((acc, rec, i, arr) => {
                return rec === '-' ? acc : rec + (i && !(i % 3) ? ',' : '') + acc;
            }, '') +
        '.' +
        p[1]
    )

}



const Transaction = ({ transaction }) => {



    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {
                transaction.text
            }
            <span>
                {sign}
                {moneyFormatter(transaction.amount)}
            </span>
            <button
                className="delete-btn"
                onClick={() => deleteTransaction(transaction.id)}
            >
                X
            </button>
        </li>
    )
}

export default Transaction;