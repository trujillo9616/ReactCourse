import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);


    const clickHandler = () => {
        setTitle('Updated!');
    }
    
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item_description">
                <h2>{title}</h2>
                <div className="expense-item_price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </div>
    );
}

export default ExpenseItem;