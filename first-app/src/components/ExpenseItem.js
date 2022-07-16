function ExpenseItem(props) {

    const expenseDate = new Date(2021, 4, 19);
    const expenseTitle = 'Car Insurane';
    const expenseAmount = 293.34;

    return (
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div>
                <h2>{props.title}</h2>
                {/* <div>${props.amount}</div> */}
            </div>
        </div>
    );
}

export default ExpenseItem;