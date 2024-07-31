import { CiHeart } from "react-icons/ci";
import { useState } from "react";

function Hover(){

    

// let isLiked = false;


let IconColor = "red";

const [isLiked, setIsLiked] = useState(true)


function ChangeLike(){


    if(isLiked){

        
        setIsLiked(false);
        IconColor= "white";

        console.log("Liked!", )

        
    };

   

    
    if(!isLiked){

        setIsLiked(true);
        IconColor = "red";
        
        console.log("Not Liked!")

    };

   
    


}



    return(
        <>

       <CiHeart className="icon" size={40} color={IconColor} onClick={ChangeLike}/> 
        </>
    )

}
export default Hover;