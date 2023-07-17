import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import './Expences.css';
import Card from '../UI/Card';
import ExpensesFilter from '../Filter/ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
  const [filteredYear,setFilteredYear] = useState('2020');
  
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filterExpenses = props.items.filter(expense => {   // here filter is  a built in js method
    /*console.log(expense.date.getFullYear().toString() === filteredYear);*/      
    return expense.date.getFullYear().toString() === filteredYear;     // here this line compares the date an the selected year and then returns boolean value
  });




  return (
    <div>

 



      <Card className="expences">
       <ExpensesFilter selected={filteredYear} onChangeFilter = {filterChangeHandler}/>
        <ExpensesList items={filterExpenses}/>           
                                                                                                                                 
       
           





















        {/* <ExpenseItem title={props.items[0].title}       here we are assigning VALUES to the ATTRIBUTES,that's why we write them inside the tag
          amount={props.items[0].amount}    More importantly this attribute name only we use in our component to refer value present in the above object 
          date={props.items[0].date}         HERE title,amount,date these are the PROPS and we use them in another comnponent 
        />

        <ExpenseItem title={props.items[1].title}          (Imp)  so our components are nothing but a function definations and a function has to be called and like this we call that components functions 
          amount={props.items[1].amount}
          date={props.items[1].date}
        />  
        <ExpenseItem title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
        <ExpenseItem title={props.items[4].title}
          amount={props.items[4].amount}
          date={props.items[4].date}
        /> */}







      </Card>
    </div>

  );


}

export default Expenses;