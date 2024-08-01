import { useState } from 'react'
import Card from './components/card'
import './App.css'
import Statevariable from './components/statevariable'

import Hover from './components/hover'



function App() {
  localStorage.setItem("myCat", "Tom");
  localStorage.setItem("Isnumber7", true);
  localStorage.setItem("number", 5);

  let animals = {animalType:"cat", diet:"tuna", breed:"ragdoll"};
  localStorage.setItem("animals",JSON.stringify(animals))


  ;
  let fruits = ["apple", "banana", "cherry"];
  localStorage.setItem("fruits", JSON.stringify(fruits));


  let house = {housetype:"detached house", ageOfThehouse:5, price:"$750,000", address:"742 Evergreen Terrace", bathrooms:2, bedrooms:"3", realtor:"Tiffany Heffner" ,phone:"(5555) 555 4321"}

  return (
    <>
    
     <Card>
     
     </Card>
     
    <Statevariable/>
    
    </>
  )
}

export default App
