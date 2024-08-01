import { useState } from "react";

function Statevariable(){

 let count = 0;

 const[list,setList] = useState('');

//   list = true;
// setList(true)

 function setcount(num){

    count = num

 }
setcount()

    return(
        <div>
            <p></p>
        </div>
    )

}
export default Statevariable;