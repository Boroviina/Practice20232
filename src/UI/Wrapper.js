import React, {Fragment} from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";


const Backdrop=props=>{
    return <div className={classes.backdrop} onClick={props.onClick} />
};
const ModalOverlay=props=>{
    return <div className={classes.modal}>
        <div>
            {props.children}
        </div>
    </div>
}
const portalElement=document.getElementById('overlays');
const Wrapper= props=>{
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onClick={props.onClickBack}/>, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>

};

export default Wrapper;