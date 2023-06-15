import React from "react";
import Card from "../../UI/Card";
import TeamItem from "./TeamItem";
import classes from './TeamDIsplay.module.css';

const TeamsDisplay = (props) => {

    const sortedTeams = props.data.sort((team1, team2) => {
            if (team1.points > team2.points)
                return -1;
            else if (team1.points < team2.points)
                return 1;
            else
                return 0;
        }
    );
    const teamList = sortedTeams.map((team) =>
        <TeamItem
            key={team.id}
            id={team.id}
            img={team.image}
            name={team.name}
            rank={team.rank}
            games={team.games}
            wins={team.wins}
            draw={team.draw}
            loses={team.loses}
            points={team.points}

        />
    );
    return <div className={`table-responsive-sm table-responsive overflow-x-auto ${classes.tablelook}`}>
        <table className={`table`}>
            <thead className={classes.view}>
            <tr className={`row`}>
                <th className={`label col-5 text-white fw-bold`}>Team Name</th>
                <th className="label col-2 text-white fw-bold">Played games</th>
                <th className="label col-1 text-white fw-bold">Wins</th>
                <th className="label col-1 text-white fw-bold">Draws</th>
                <th className="label col-1 text-white fw-bold">Loses</th>
                <th className="label col-1 text-white fw-bold">Points</th>
            </tr>
            </thead>
            <tbody className={classes.body}>
            {teamList}
            </tbody>
        </table>
    </div>
};

export default TeamsDisplay;