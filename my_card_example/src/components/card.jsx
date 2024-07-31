import { CiHeart } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtubLight } from "react-icons/pi";
import Hover from "./hover";

function Card(){
return(
    <>
     <div className="main" style={{
    //   backgroundColor:"red",
      width:"470px",
      height:"600px",
      borderRadius:"10px",
      boxShadow:"10px 10px  rgb(230, 230, 240)",
      rowGap:"none",
      gap:"none",
    
    
        
      

      
     }}
     >

        <div className="div1" style={{
            
            width:"100%",
            height:"40%",
            borderTopRightRadius:"10px",
            borderTopLeftRadius:"10px"
        }}>
{/* 
<CiHeart className="icon" style={{
    fontSize:"40px",
    color:"red",
    marginRight:"-400px",
    transform: "translate(-10%, -10%)",
    cursor:"pointer",
    marginBottom:"-40px"
    
}}/>  */}
<Hover style={{


}}/>
     </div>   

        <div className="2" style={{
            backgroundColor:"white",
            width:"100%",
            height:"30%",
            
          
        }}
    
        >
            
          <span style={{
            marginRight:"200px"
          }}
          >DETACHED HOUSE . 5Y OLD</span> 

          <h3 style={{
            marginRight:"330px"
          }}
          >$750,000</h3>

          <h3 style={{
            marginRight:"240px"
          }}>742 Evergreen Terrance</h3>

        </div>
        

        <div className="3" style={{
            backgroundColor:"white",
            width:"100%",
            height:"15%"

        }}>
            <span><IoBedOutline />3 Bedroom       <PiBathtubLight />  2 Bathrooms</span>

        </div>

        <div className="4" style={{
            backgroundColor:"white",
            width:"100%",
            height:"15%",
            borderBottomRightRadius:"10px",
            borderBottomLeftRadius:"10px",
            
        }}>
            
            <span style={{
                marginRight:"300px"
            }}>REALTOR</span>






           
            <span>
            <img style={{
            width:"50px",
            height:"50px",
            borderRadius:"50%",
            marginRight:"240px"
           }}
           src="./src/assets/GIRL.jpg" ></img>



           Tiffany Heffner
           {/* <p>(555) 555- 4321</p> */}
           </span>
        </div>

     </div>
    
    </>
)
}
export default Card;