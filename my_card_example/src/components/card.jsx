import { CiHeart } from "react-icons/ci";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtubLight } from "react-icons/pi";
import Hover from "./hover";





function Card({accomodation}){

  console.log(accomodation)
  
return(
    <>
     <div className="main" style={{
    //   backgroundColor:"red",
      width:"400px",
      height:"600px",
      borderRadius:"10px",
      boxShadow:"10px 10px  rgb(230, 230, 240)",
      rowGap:"none",
      gap:"none",
      
    
    
        
      

      
     }}
     >

        <div className="div1" style={{
          // backgroundImage:'url(./assets/house.jpg)',
        //   backgroundImage:`url(${require("./assets/house.jpg")})`,
            width:"100%",
            height:"40%",
            borderTopRightRadius:"10px",
            borderTopLeftRadius:"10px",
            stroke:"black"
        }}>

<Hover style={{


}}/>
{accomodation.url}
     </div>   
     <hr></hr>

        <div className="2" style={{
            backgroundColor:"white",
            width:"100%",
            height:"30%",
            
          

            
          
        }}
    
        >
            
          <span style={{
            marginRight:"200px"
          }}
          >{accomodation.housetype}
          {accomodation.ageOfThehouse}
          </span> 

          <h3 className="number" style={{
            marginRight:"230px"
          }}
          >{accomodation.priceOfthehouse}</h3>

          <h4 style={{
            marginRight:"220px",
            fontFamily:"normal",
            fontWeight:"500",
          }}>{accomodation.addressOfthehouse}</h4>

        </div>
        
<hr></hr>
        <div className="3" style={{
            backgroundColor:"white",
            width:"100%",
            height:"15%"

        }}>
            <span style={{ 
              fontSize:"20px",
              marginRight:"20px"

            }}><IoBedOutline />{accomodation.NumberOfbedrooms}      
              <PiBathtubLight />{accomodation.NumberOfbathrooms}</span>

        </div>
<hr></hr>

        <div className="4" style={{
            backgroundColor:"whitesmoke",
            width:"100%",
            height:"15%",
            borderBottomRightRadius:"10px",
            borderBottomLeftRadius:"10px",
            borderBlockEnd:'30px'
            
        }}>
            
            <span style={{
                marginRight:"300px",
                fontFamily:'-moz-initial',
                float:"left"
            }}>{accomodation.realtorfullName}</span>






           
            <span style={{
           
              marginRight:"320px"
              
            }} >
            <img style={{
            width:"50px",
            height:"50px",
            borderRadius:"50%",
          // float:"right"
          // position:"absolute"
           }}
           src="./src/assets/GIRL.jpg" ></img>

</span>

           {/* <span style={{
            // float:"left",
            marginLeft:"80px",
            // top:"-40px"
            fontFamily:"fantasy"
           }}>Tiffany Heffner</span>
           */}
           
           <p style={{
            float:"left",
            position:"relative"
            
           }}>{accomodation.RealtorPhoneNumber}</p>
           
          
        </div>

     </div>
    
    </>
)
}
export default Card;