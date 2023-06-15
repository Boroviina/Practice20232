import React, {useContext, useRef, useState} from "react";
import Wrapper from "../../UI/Wrapper";
import DropDownList from "./DropDownList";
import defPic from '../../images/ball.png'
import classes from "./AddRes.module.css";
import MessageContext from "../../UI/MessageContext";
import SameTeamMessage from "../../UI/SameTeamMessage";

const AddResult = props => {
    //these two store team's id
    const [selectedTeam1, setSelectedTeam1] = useState(null);
    const [selectedTeam2, setSelectedTeam2] = useState(null);
    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);
    const [messageShow, setMessageShow] = useState(false);
    const [sameTeamMessageShow, setSameTeamMessageShow] = useState(false)
    const team1SelectedHandler = (event) => {
        setSelectedTeam1(event.target.value);
    }
    const team2SelectedHandler = (event) => {
        setSelectedTeam2(event.target.value);
    }

    const updateScoreHandler1 = (event) => {
        setScore1(event.target.value);
    }
    const updateScoreHandler2 = (event) => {
        setScore2(event.target.value);
    }

    const hideMessageHandler = props => {
        setMessageShow(false);
    }
    const hideSameTeamMessageHandler = props => {
        setSameTeamMessageShow(false);
    }


    const scoreChangeCalculation = (event) => {
        event.preventDefault();

        if (!selectedTeam1 || !selectedTeam2) {
            setMessageShow(true);
        } else {
            const team1 = props.data.filter((team) => team.id === selectedTeam1)[0];
            const team2 = props.data.filter((team) => team.id === selectedTeam2)[0];

            if (team1.id === team2.id) {
                setSameTeamMessageShow(true);
            } else {
                if (score1 === score2) {
                    team1.games++;
                    team2.games++;
                    team1.draw++;
                    team1.points++;
                    team2.draw++;
                    team2.points++;
                } else if (score1 > score2) {
                    team1.wins++;
                    team1.points += 3;
                    team2.loses++;
                    team1.games++;
                    team2.games++;

                } else {
                    team2.wins++;
                    team2.points += 3;
                    team1.loses++;
                    team1.games++;
                    team2.games++;
                }
                props.onClickClose();
            }
        }

    };

    const teamList = (
        props.data.map((team) =>
            <DropDownList
                key={team.id}
                id={team.id}
                image={team.image}
                name={team.name}
            />)
    );

    const team1Image = () => {
        if (!selectedTeam1 || selectedTeam1 === 'default') {
            return defPic;
        }
        const filteredTeams = props.data.filter((team) => team.id === selectedTeam1);
        const teamObject = filteredTeams[0];
        return teamObject.image;
    };
    const team2Image = () => {
        if (!selectedTeam2 || selectedTeam2 === 'default') {
            return defPic;
        }
        const teamObject = props.data.filter((team) => team.id === selectedTeam2)[0];
        return teamObject.image;
    }

    return (
        <Wrapper onClickBack={props.onClickClose}>
            <div className="row my-2 ">
                <h1 className="text-center">Choose your teams!</h1>
            </div>
            <form className={classes.layer}>
                <div className={`row p-5 ${classes.teamsselection}`}>
                    <img src={team1Image()} alt="" className="col-2"/>
                    <select className="col-4" placeholder="Choose your team..." onChange={team1SelectedHandler}>
                        <option value="">Choose team...</option>
                        {teamList}
                    </select>
                    <select className="col-4" placeholder="Choose ypur team..." onChange={team2SelectedHandler}>
                        <option value="">Choose team...</option>
                        {teamList}
                    </select>
                    <img src={team2Image()} alt="" className="col-2"/>
                </div>

                <div className={`row d-flex justify-content-around align-items-center mb-5 ${classes.resultinput}`}>
                    <input className="col-4" type="number" min='0' defaultValue={0} onChange={updateScoreHandler1}/>
                    <span className="text-white fw-bold col-1">-</span>
                    <input type="number" className="col-4" min={0} defaultValue={0} onChange={updateScoreHandler2}/>
                </div>

                <div className="row justify-content-end mt-5">
                    <div className="col-12 align-content-center d-flex justify-content-end">
                        <button className="button btn-light col-4" onClick={props.onClickClose}>Close</button>
                        <button className="button btn-dark col-4" onClick={scoreChangeCalculation}>Update score
                            table
                        </button>
                        {messageShow ? <MessageContext onClick={hideMessageHandler}/> : null}
                        {sameTeamMessageShow ? <SameTeamMessage onClick={hideSameTeamMessageHandler}/> : null}
                    </div>
                </div>
            </form>
        </Wrapper>
    );
};

export default AddResult;