import { CiHeart } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtubLight } from "react-icons/pi";

function Card(){
return(
    <>
     <div className="main" style={{
      backgroundColor:"red",
      width:"500px",
      height:"700px",
      borderRadius:"10px",
      boxShadow:"10px 10px  rgb(230, 230, 230)",
      rowGap:"none",
      gap:"none"
    
        
      

      
     }}
     >

        <div className="div1" style={{
            
            width:"100%",
            height:"40%",
            borderTopRightRadius:"10px",
            borderTopLeftRadius:"10px"
        }}>

<CiHeart className="icon" style={{
    fontSize:"30px",
    color:"white",
    marginRight:"-290px",
    transform: "translate(-10%, -10%)",
    cursor:"pointer",
    
}}/> 

     </div>   

        <div className="2" style={{
            backgroundColor:"white",
            width:"100%",
            height:"30%",
          
        }}
    
        >
            
          <h3>DETACHED HOUSE . 5Y OLD</h3 >  
          <h1>$750,000</h1>
          <h3>742 Evergreen Terrance</h3>

        </div>
        

        <div className="3" style={{
            backgroundColor:"white",
            width:"100%",
            height:"15%"

        }}>
            <h4><IoBedOutline />3 Bedroom         <PiBathtubLight />  2Bathrooms</h4> 

        </div>

        <div className="4" style={{
            backgroundColor:"white",
            width:"100%",
            height:"15%",
            borderBottomRightRadius:"10px",
            borderBottomLeftRadius:"10px",
        }}>
            
            <h4>REALTOR</h4>

        </div>

     </div>
    
    </>
)
}
export default Card;