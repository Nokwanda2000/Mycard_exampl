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

  return (
    <>
    
     <Card>
     
     </Card>
     
    <Statevariable/>
    
    </>
  )
}

export default App
