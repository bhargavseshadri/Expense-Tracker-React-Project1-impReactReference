import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {             //here we created a FORM using html to give the inputs to our Expense Tracker

    const [enteredTitle, setEnteredTitle] = useState('');   //CONCEPT OF "MULTIPLE STATES"
    const [enteredAmount, setEnteredAmount] = useState('');    //here we give empty string because, before the user giving the value the value was empty
    const [enteredDate, setEnteredDate] = useState('');

    
    // const [userInput , setUserInput] = useState({   //concept of "SINGLE STATE"
    //     enteredTitle: '',                           //here we give all those in the from of a Object.
    //     enteredAmount: '',
    //     enteredDate: ''
    // });



    //our "onChange" event handler points to this function , and then this function gets executed
    const titleChangeHandler = (event) => { //here "event" it  a default js objects.it helps us to get the user input values
        setEnteredTitle(event.target.value);      //event.target.value  using this we can get the hold of the given user value        
        
        // setUserInput((pervState) => {            //here this "pervstate" refers to our previous object.here the previous object elements are "enteredTitle, enteredAmount, enteredDate"
        //     return{...pervState,enteredTitle:event.target.value};   //here we use SPREAD OPERATOR : what this spread operator do is it just brings all the objects from the previous object to this object. 
        // });                                                         //here by writing this line we don't make that remaining properties like amount & date goes into dump.         


    };


    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        //   setUserInput({                    
        //     ...userInput,                
        //     enteredAmount:event.target.value,

        // })
    };


    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({                  
        //     ...userInput,                
        //     enteredDate:event.target.value,

        // })
    };

    const submitHandler = (event) => {
        event.preventDefault();  //this is a built in js function used to prevent browser sending the data to the devlopment server when we click the submit 

        const expenseData = {       // in this object we combine all the data in one object
            title: enteredTitle,
            amount: +enteredAmount,  //here these enteredTitle,enteredAmount,enteredDate points to the state variables
            date: new Date(enteredDate)
        };
        //console.log(expenseData);

        props.onSaveExpenseData(expenseData);    //here we are using the prop we defined in our NewExpense component so that we can execute "SaveExpenseDataHandler" HERE
        setEnteredTitle(''); //this gives us the ability to change the given user input(these are belongs to that "VALUE property" in that jsx)
        setEnteredAmount('');
        setEnteredDate('');

    };

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text"
                    value={enteredTitle}
                    onChange={titleChangeHandler}
                />
            </div>

            <div className="new-expense__control">
                <label>Amount</label>
                <input 
                type="number" 
                min="0.01" 
                step="0.01" 
                value={enteredAmount} 
                onChange={amountChangeHandler} />
            </div>

            <div className="new-expense__control">
                <label>Date</label>
                <input 
                type="date" 
                min="2019-01-01" 
                max="2022-12-31"  
                value={enteredDate} 
                onChange={dateChangeHandler} />
            </div>

        </div>
        <div className="new-expense__actions">
            
           <button type= "button" onClick = {props.onCancel}>Cancel</button>
            
            <button type="submit">Add Expense</button>
            
        </div>
    </form>

};

export default ExpenseForm; 