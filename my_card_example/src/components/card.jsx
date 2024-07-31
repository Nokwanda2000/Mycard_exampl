function Card(){
return(
    <>
     <div className="main" style={{
      backgroundColor:"red",
      width:"400px",
      height:"700px",
      borderRadius:"20px",
  
        
      

      
     }}>

        <div className="1" style={{
            backgroundImage: url("./house.jpg"),
            width:"100%",
            height:"40%",
            borderTopRightRadius:"20px",
            borderTopLeftRadius:"20px"
        }}>

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