import React from "react";
import button from "bootstrap/js/src/button";
import classes from './HeaderButton.module.css';
import btnIcon from '../../images/button-icon.png';

const HederButton = props => {
    return (
        <button className={`btn btn-light col-sm-4 col-md-3 col-lg-3 my-2  fw-bold ${classes.button}`}
                onClick={props.onClickAdd}>
            <img className=" col-sm-4 " src={btnIcon} alt="football"/>
            <label className="col-12 col-sm-8 "> Add result</label>
        </button>
    );
};

export default HederButton;