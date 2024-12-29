import { useState } from "react";
import Numberselector from "./Numberselector";
import Rolleddice from "./Rolleddice";
import Totalscore from "./Totalscore";
import Rules from "./Rules";

const Gameplay = () => {
    const [selectednumber, setselectednumber] = useState();
    const [currentdice, setcurrentdice] = useState(1);
    const [score, setscore] = useState(0);
    const [error, seterror] = useState();
    const [showrule, setshowrule] = useState(false);

    const generaterandomnumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };
    const roldice = () => {
        if (!selectednumber) {
            seterror("you have not selected number");
            return;
        }
        seterror("");
        const randomnumber = generaterandomnumber(1, 7)
        setcurrentdice(randomnumber);
        if (selectednumber === randomnumber) {
            setscore(prev => prev + randomnumber);
        }
        else {
            setscore(prev => prev - 2);
        }
        setselectednumber(undefined);
    }

    const resetscore = () => {
        setscore(0);
        setcurrentdice(1);
    }


    return <>
        <div className="herogame-upper">
            <Totalscore score={score}></Totalscore>
            <Numberselector selectednumber={selectednumber} setselectednumber={setselectednumber} error={error}></Numberselector>
        </div>
        <div className="herogame-lower">
            <Rolleddice currentdice={currentdice} setcurrentdice={setcurrentdice} roldice={roldice}></Rolleddice>
            <button className="resetbtn" onClick={resetscore}>Restart Game</button>
            <button className="showrule-btn" onClick={() => setshowrule((prev) => !prev)}>
                {showrule ? "Hide" : "Show"} Rule</button>
            {/* <Rules></Rules> */}
            {showrule && <Rules></Rules>}
        </div>
    </>
}
export default Gameplay;