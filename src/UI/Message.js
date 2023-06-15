import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const BackdropMessage=props=>{
    return <div onClick={props.onClickBackDrop} className={classes.backdropmessage}>
        {props.onClick}
    </div>
}
const ModalOverlayMessage=props=>{
    return <div className={classes.modalmessage}>
        <div>
            {props.children}
        </div>
    </div>
}
const  portalElementMessage=document.getElementById('message');
const Message=props=>{
    return <Fragment>
        {ReactDOM.createPortal(<BackdropMessage onClickBackDrop={props.onBack}/>, portalElementMessage)};
        {ReactDOM.createPortal(<ModalOverlayMessage>{props.children}</ModalOverlayMessage>, portalElementMessage)};
    </Fragment>
}
export default Message;
