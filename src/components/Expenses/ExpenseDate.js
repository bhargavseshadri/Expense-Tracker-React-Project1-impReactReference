import './ExpenseDate.css';


const ExpenseDate = (props) => {
    const day = props.date.toLocaleString('en-US',{day:'2-digit'});
    const year = props.date.getFullYear();   //here getFullYear() is an another built in function in js
    
    return (
        <div className='expense-date'>
                <div className='expense-date__month'>{props.date.toLocaleString('en-US',{month:'long'})}</div>
                <div className='expense-date__year'>{year}</div>
                <div className='expense-date__day'>{day}</div>
        </div>

    );
} 
 
export default ExpenseDate;

/* here in this comnponent we write some date related code and 
in ExpenseItem we call this component 
in this way we link the components */