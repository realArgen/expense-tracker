import React from "react";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";


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

const IncomeExpenses = () => {


    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map((elem) => elem.amount);

    const income = (
        amounts
            .filter((item) => item > 0)
            .reduce((acc, rec) => (acc += rec), 0)
    );

    const expense = (
        amounts.filter((item) => item < 0)
            .reduce((acc, rec) => (acc += rec), 0) * -1
    );

    return (
        <div className="inc-exp-container">
            <div>

                <h4>Incomes </h4>
                <p className="money plus">{moneyFormatter(income)}</p>
                <h4>Expenses</h4>
                <p className="money minus">{moneyFormatter(expense)}</p>

            </div>
        </div>
    )
}

export default IncomeExpenses;