import React, {Fragment, useState} from "react";
import Header from "./MainComponents/Header/Header";
import TeamsDisplay from "./MainComponents/Items/TeamsDisplay";
import AddResult from './MainComponents/AddResult/AddResult'
import barca from "./images/barcelona.png";
import chel from "./images/chelsea.png";
import real from "./images/real-madrid.png";
import city from "./images/mac-city.png";

const EXAMPLE_ITEMS=[
    {
        id: 't1',
        image: barca,
        name: 'FC Barcelona',
        rank: 1,
        games: 8,
        wins: 7,
        draw: 0,
        loses: 1,
        points: 7
    },
    {
        id: 't2',
        image: chel,
        name: 'FC Chelsea',
        rank: 2,
        games: 8,
        wins: 6,
        draw: 1,
        loses: 1,
        points: 6
    },
    {
        id: 't3',
        image: real,
        name: 'FC Real Madrid',
        rank: 3,
        games: 8,
        wins: 5,
        draw: 2,
        loses: 1,
        points: 5
    },
    {
        id: 't4',
        image: city,
        name: 'FC Manchester City',
        rank: 4,
        games: 8,
        wins: 3,
        draw: 2,
        loses: 3,
        points: 3
    }

]
function App() {
    const [moduleIsShow, setModuleIsShow]=useState(false);
    const showAddMatchHandler=()=>{
        setModuleIsShow(true);
    }
    const hideAddMatchHandler=()=>{
        setModuleIsShow(false);
    }

  return (
     <Fragment>
         {moduleIsShow && <AddResult onClickClose={hideAddMatchHandler} data={EXAMPLE_ITEMS}/>}
         <Header onClickAddMatch={showAddMatchHandler}/>
         <main className="container">
                 <TeamsDisplay data={EXAMPLE_ITEMS}/>
         </main>
     </Fragment>
  );
}

export default App;
