import React, {useContext} from "react";
import classes from "./DropDownList.modal.css";

const DropDownList = (props) => {
    return (
        <option value={props.id} className={`${classes.team}`}>
            {props.name}
        </option>
    );
};

export default DropDownList;