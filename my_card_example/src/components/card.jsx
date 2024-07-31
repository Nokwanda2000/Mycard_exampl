import { CiHeart } from "react-icons/ci";


function Card(){
return(
    <>
     <div className="main" style={{
      backgroundColor:"red",
      width:"400px",
      height:"700px",
      borderRadius:"20px",
      boxShadow:"10px 10px  rgb(230, 230, 230)",
    
        
      

      
     }}
     >

        <div className="div1" style={{
            
            width:"100%",
            height:"40%",
            borderTopRightRadius:"20px",
            borderTopLeftRadius:"20px"
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
            backgroundColor:"pink",
            width:"100%",
            height:"30%",
          
        }}>

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
            borderBottomRightRadius:"20px",
            borderBottomLeftRadius:"20px",
        }}>

        </div>

     </div>
    
    </>
)
}
export default Card;