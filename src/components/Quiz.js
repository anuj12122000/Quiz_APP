import React, { useState, useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { Questions } from '../Helpers/Questions.js';



function Quiz() {

    const { score, setScore, gameState, setGameState } = useContext(QuizContext);
    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    const handleAnswerButtonClick = () => {

        if (optionChosen == Questions[currQuestion].answer) {
            let b = score + 1;
            setScore(b);
            //alert(score);
        }
        const nextQuestion = currQuestion + 1;
        setCurrQuestion(nextQuestion);
    };

   const finishquiz =() =>{
    if (optionChosen == Questions[currQuestion].answer) {
        let b = score + 1;
        setScore(b);
        // alert(score);
    }
    setGameState("endscreen");
    }

    return (<div className="Quiz">

        
        <h1>{Questions[currQuestion].prompt}</h1>

        <div className="options">
            <button onClick={() => setOptionChosen("A")}>{Questions[currQuestion].OptionA}</button>
            <button onClick={() => setOptionChosen("B")}>{Questions[currQuestion].OptionB}</button>
            <button onClick={() => setOptionChosen("C")}>{Questions[currQuestion].OptionC}</button>
            <button onClick={() => setOptionChosen("D")}>{Questions[currQuestion].OptionD}</button>

        </div>



        {currQuestion == Questions.length - 1 ? (<button onClick={finishquiz}>finsih quiz </button>) :

            (<button onClick={handleAnswerButtonClick}>next Question</button>)}



    </div>
    );
}
export default Quiz;