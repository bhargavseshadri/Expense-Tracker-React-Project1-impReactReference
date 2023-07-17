import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';   // here we are importing the other component into this component
import React, {useState} from "react";     //useState is a function, which is used to re-evaluate
                                /*now in that down function we give the parameter "props"[we can give any name]
                                that means its like a object which holds the info.here porps holds all the values*/
const  ExpenseItem = (props) =>  {                        //here this function means the Component of the REACT.
    
   // const expenseDate = new Date(2021, 2, 28);  /*here DATE is a built in js constructor,so that's why we are creating object here**/
                                                // and aslo remember while calling the object we have to call with  toISOString() 
    //const expenseTitle = 'Car Insurance';       //*** THESE THREE ARE NOT USED IN PROPS CONCEPT
    //const expenseAmount = 294.67;
    
    const [title, setTitle]=useState(props.title);         //function call for that hook ,they must and should be called inside the function
                                                            //here the first element(title) is the initial value and the second element(setTitle) is the updated value

   

    
    const clickHandler = () => {        //We can also give the event listner (For buttom) function like this 
        setTitle("Updated");
        console.log(title);    
    };                                  //then in the event listner we give clickHandler .
    


    

   
    return (                            //so in down code we have one root div inside that we have all div's
    //So now here instead of Div tag we use <Card/> tag, because along with that we can get the styling also 
        <li>
          <Card className="expense-item">
                                              
            <ExpenseDate date={props.date} />    
            
            <div className='expense-item__description'>
                                         
                <h2>{title}</h2>      
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button> 
        </Card>
        </li>
    );
}

export default ExpenseItem;                      //in order to use this we have to export it  