import './Card.css';


const Card = (props) =>  {
    const classes = 'card ' + props.className;  /**This lines makes that anything we receive with the name "className" it gets added to this string 
                                                    , so that those classNames also recognised by our component */
    return <div className={classes}>{props.children}</div>   
}                                                             //here using this "props.children" we can write the content between the Component Tags whereever we use

export default Card;