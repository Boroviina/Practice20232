import React from "react";
import classes from './Header.module.css';
import HederButton from "./HederButton";
const Header=(props)=>{
    
    
    return(

        <div className="container">
            <header className={`${classes.header} `} >
                    <h1 className="fw-bold">League table</h1>
                    <HederButton onClickAdd={props.onClickAddMatch}/>
            </header>
        </div>

    );

};

export default Header