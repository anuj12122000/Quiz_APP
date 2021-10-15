import React, {useState, useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import {Questions} from "../Helpers/Questions"
function EndScreen(){
    
    
    const {gameState,setGameState,setScore,score,setCurrQuestion,currQuestion}=useContext(QuizContext);

    const restartQuiz =()=>{
            setScore(0);
            setGameState("menu");
    }
    
    return (
    <div className="EndScreen">you are in end screen component
   { <h3>{score}/{Questions.length}</h3> }
        <button onClick ={restartQuiz}>start Quiz again</button>

    </div>
    );
}

export default EndScreen;