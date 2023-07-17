import React , {useState} from "react";   //here we dont use it but it is recommended to imporrt this because JSX under the hood uses this librery

//The goal with this component is return a "FORM" for our inputs.

import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const [isEditing,setIsEditing]=useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {            //"enteredExpenseData" it is defined here
        const expenseData = {       //it is a new object we are defining here,it work is to get all the data from ExpenseData object present in submitHandler in ExpenseForm Component
            ...enteredExpenseData,   //now observe this here "enteredExpenseData" is the parameter to this function it refers to expenseData obj present in  "submitHandler" in ExpenseForm and using spread operator it copie that obj to here
            id: Math.random().toString()
        }
        //console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsEditing(false);

    };                                  //so down "onSaveExpenseData" prop receives this function as a value 
                                        //down there "onSaveExpenseData" is not a event listener provided by js it is the prop we defined here
    
    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditing = () => {   //this function we used in ExpenseForm to show the "Add Expense" button again when we click the submit or cancel
        setIsEditing(false);
    }
    
    
    return <div className="new-expense"> 
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel={stopEditing}/>}      
    </div>
};


export default NewExpense;