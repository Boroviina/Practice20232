import React from "react";
import Message from "./Message";
import classes from "./Message.module.css";


const SameTeamMessage=props=>{

    return(
        <Message onBack={props.onClick}>
            <div className={classes.content}>
                <p>You selected same team twice.</p>
                <button onClick={props.onClick} className="btn btn-close"></button>
            </div>
        </Message>
    );
};

export default SameTeamMessage;