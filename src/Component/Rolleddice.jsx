import { useState } from "react";

const Rolleddice = ({currentdice,setcurrentdice,roldice}) => {
   
    return <>
        <div className="diceimage" onClick={() => roldice()}>
            <img src={`/public/images/${currentdice}.png`}alt="" />
        </div>
        <p>Click on dice to roll</p>
    </>
}
export default Rolleddice;