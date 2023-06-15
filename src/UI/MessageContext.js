import React from "react";
import Message from "./Message";
import classes from "./Message.module.css";

const MessageContext = props => {
    return (
        <Message onBack={props.onClick}>
            <div className={classes.content}>
                <p>Team is not choosen. Please choose teams.</p>
                <button onClick={props.onClick} className="btn btn-close"></button>
            </div>
        </Message>
    )
}
export default MessageContext;