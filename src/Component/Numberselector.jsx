import { useState } from "react";

const Numberselector = ({selectednumber,setselectednumber,error}) => {
    
    const arraynumber = [1, 2, 3, 4, 5, 6];
  
    return <>
        <div className="numselector">
            <p className="error">{error}</p>
            {
                arraynumber.map((value, i) => (<button key={i} onClick={()=>setselectednumber(value)}>{value}</button>))
            }
        </div>
    </>

}
export default Numberselector;