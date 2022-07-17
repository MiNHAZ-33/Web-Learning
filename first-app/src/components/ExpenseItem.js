import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';


function ExpenseItem(props) {



    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div>
                <h2>{props.title}</h2>
                <div>${props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;