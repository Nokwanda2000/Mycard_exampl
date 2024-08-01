import { useState } from 'react'
import Card from './components/card'
import './App.css'
import Statevariable from './components/statevariable'



function App() {
  localStorage.setItem("myCat", "Tom");
  localStorage.setItem("Isnumber7", true);
  localStorage.setItem("number", 5);

  let animals = {animalType:"cat", diet:"tuna", breed:"ragdoll"};
  localStorage.setItem("animals",JSON.stringify(animals))


  ;
  let fruits = ["apple", "banana", "cherry"];
  localStorage.setItem("fruits", JSON.stringify(fruits));


  let house = {housetype:"Detached house",picture:"../assets/house.jpg", ageOfThehouse: "5yr Old", priceOfthehouse:"R750,000", addressOfthehouse:"742 Evergreen Terrace", NumberOfbathrooms:"2Bath", NumberOfbedrooms:"3 Bed", realtorfullName:"Tiffany Heffner" ,RealtorPhoneNumber:"(5555) 555 4321"}
  localStorage.setItem('house',JSON.stringify(house));

  let housesForsale = [
    
    
     {housetype:"Delma", 
      ageOfThehouse: "10yr Old", 
      priceOfthehouse:"R1750,000", 
      addressOfthehouse:"70 Dulwich Rd", 
      NumberOfbathrooms:"2Bath", 
      NumberOfbedrooms:"4 Bed",
       realtorfullName:"Dolly J" ,
       RealtorPhoneNumber:"(5555) 555 4321"},
    
                       
    
    
    {housetype:"Second house",
       ageOfThehouse: "2yr Old",
        priceOfthehouse:"R350,000", 
        addressOfthehouse:"42 Old miller rd",
         NumberOfbathrooms:"2Bath", NumberOfbedrooms:"3 Bed",
          realtorfullName:"Amanda Ngcobo" ,
          RealtorPhoneNumber:"(444) 555 4321"},
                       
    
    
  {housetype:"third house",
       ageOfThehouse: "3yr Old",
        priceOfthehouse:"R750,000", 
        addressOfthehouse:"192 Eastwood Rd", 
        NumberOfbathrooms:"2Bath", 
        NumberOfbedrooms:"3 Bed", 
        realtorfullName:"Love Goldberg",
        RealtorPhoneNumber:"(333) 555 4321"},


           
  {housetype:"third house",
    ageOfThehouse: "3yr Old",
     priceOfthehouse:"R750,000", 
     addressOfthehouse:"192 Eastwood Rd", 
     NumberOfbathrooms:"2Bath", 
     NumberOfbedrooms:"3 Bed", 
     realtorfullName:"Love Goldberg",
     RealtorPhoneNumber:"(333) 555 4321"}

     



  
                      ]  
    localStorage.setItem("housesForsale",JSON.stringify(housesForsale)) 

    let houses = localStorage.getItem("housesForsale")
    console.log(houses)

    localStorage.setItem("housesList",JSON.stringify(housesForsale))

    function  Create(house){

      houses = localStorage.getItem("houseList")
      localStorage.setIte("HhouseList",JSON.stringify(house))

    };


    function Read(){

    }

    function Update(){

    }
 
    function Delete(){

    }

  return (
    <>
    
     <Card accomodation={house}>
     
     </Card>
     
     
    <Statevariable/>

    <Card accomodation={housesForsale[0]}/>
    <Card accomodation={housesForsale[1]}/>
    <Card accomodation={housesForsale[2]}/>
    </>
  )
}

export default App
