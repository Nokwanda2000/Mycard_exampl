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
            borderTopLeftRadius:"10px",
            stroke:"black"
        }}>

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

          <h3 className="number" style={{
            marginRight:"330px"
          }}
          >$750,000</h3>

          <h3 style={{
            marginRight:"240px",
            fontFamily:"-moz-initial"
          }}>742 Evergreen Terrance</h3>

        </div>
        

        <div className="3" style={{
            backgroundColor:"white",
            width:"100%",
            height:"15%"

        }}>
            <span style={{ 
              fontSize:"20px",
              marginRight:"20px"

            }}><IoBedOutline />3 Bedroom       
              <PiBathtubLight />  2 Bathrooms</span>

        </div>


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
            }}>REALTOR</span>






           
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
          
           
           <span style={{
            float:"left",
            
           }}>(555) 555- 4321</span>
            */}
          
        </div>

     </div>
    
    </>
)
}
export default Card;