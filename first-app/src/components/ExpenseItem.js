import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import React, { useState } from 'react'

function ExpenseItem(props) {


    const [title, setTitle] = useState(props.title)

    const clickHandler = () => {
        setTitle('I am updated');
        console.log('I am clicked');
    }



    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div>
                <h2>{title}</h2>
                <div>${props.amount}</div>
            </div>
            <button onClick={clickHandler} >Change Title</button>
        </Card>
    );
}

export default ExpenseItem;