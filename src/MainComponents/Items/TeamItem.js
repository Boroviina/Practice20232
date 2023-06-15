import React from "react";
import classes from "./TeamDIsplay.module.css";


const TeamItem = (props) => {

    return (
        <tr>
            <td className={`col-2 justify-content-start`}>
                <img src={props.img}/>
            </td>
            <td className={`col-3 justify-content-start text-white`}>{props.name}</td>
            <td className="col-1  justify-content-start text-white">{props.games}</td>
            <td className="col-1 text-white">{props.wins}</td>
            <td className="col-1 text-white">{props.draw}</td>
            <td className="col-1 text-white ">{props.loses}</td>
            <td className="col-1 text-white">{props.points}</td>
        </tr>
    );

}
export default TeamItem;