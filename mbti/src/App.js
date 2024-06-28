import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Start from "./components/Start";
import Result from "./components/Result";
import Question from "./components/Question";
import { useState } from "react";

function App() {
    const [num, setNum] = useState(1);

    const [score, setScore] = useState({
        EI: 0,
        SN: 0,
        TF: 0,
        PJ: 0,
    });

    const updateScore = (type, value) => {
        setScore({
            ...score,
            [type]: score[type] + value,
        });
    };

    const resetState = () => {
        setNum(1);
        setScore({
            EI: 0,
            SN: 0,
            TF: 0,
            PJ: 0,
        });
    };

    return (
        <Routes>
            <Route path="/" element={<Start setNum={setNum}></Start>}></Route>
            <Route
                path="/question"
                element={
                    <Question
                        num={num}
                        updateScore={updateScore}
                        setNum={setNum}
                    ></Question>
                }
            ></Route>
            <Route
                path="/result"
                element={
                    <Result score={score} resetState={resetState}></Result>
                }
            ></Route>
        </Routes>
    );
}

export default App;
