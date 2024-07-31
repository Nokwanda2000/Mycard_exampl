import { CiHeart } from "react-icons/ci";


function Card(){
return(
    <>
     <div className="main" style={{
      backgroundColor:"red",
      width:"500px",
      height:"700px",
      borderRadius:"10px",
      boxShadow:"10px 10px  rgb(230, 230, 230)",
    
        
      

      
     }}
     >

        <div className="div1" style={{
            
            // width:"100%",
            // height:"40%",
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
            backgroundColor:"yellow",
            width:"100%",
            height:"15%"

        }}>

        </div>

        <div className="4" style={{
            backgroundColor:"orange",
            width:"100%",
            height:"15%",
            borderBottomRightRadius:"10px",
            borderBottomLeftRadius:"10px",
        }}>

        </div>

     </div>
    
    </>
)
}
export default Card;