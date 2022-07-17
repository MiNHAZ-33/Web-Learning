import logo from './logo.svg';
import './App.css';

import ExpenseItem from './components/ExpenseItem';
import Card from './components/Card';

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Paper',
      amount: 23.43,
      date: new Date(2022, 1, 3),
    },
    {
      id: 'e2',
      title: 'Brush',
      amount: 33.43,
      date: new Date(2022, 6, 3),
    },
    {
      id: 'e3',
      title: 'Acid',
      amount: 64.73,
      date: new Date(2022, 1, 3),
    },
  ]

  return (
    <Card>
      <h2>Let's Get Started</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} ></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} ></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} ></ExpenseItem>
    </Card>
  );
}

export default App;
