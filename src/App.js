import './App.css';
import { useState } from 'react';
import React from 'react'
import ProductCards from './components/ProductCards'
// import Database from '../Database/carsdata'
import Carsdata from './Database/carsdata';
function App() {
  const[arr, setArray]= useState([{title:"Ferrari",image:'./images/accord1.jpg', price:"900000", color:"white"},{title:"Fortuner", image:'./images/accord1.jpg',price:"3000", color:"blue"},{title:"Toyota",image:'./images/accord1.jpg', price:"500000", color:"black"}]); 
// const [arr,setArr]=useState()
  return (
    <>
  <h1 className='container mt-5  '  >Prduct Add to cart Assignemt</h1>
    <div className='container-fluid pt-5 '>
    
      <div className="card mt-5 mx-auto">         
      <div className="row">
    {arr.map((e)=>(
      
    <div className="col-sm-3">  
      <div className="card-body ">
       <div className='card'> 
      <ProductCards title={e.title} price={e.price}  color={e.color} image={e.image} />
</div></div></div>

        ))}
    </div></div>    </div>
     
      
     {/* </div> */}
    </>
  )
}

export default App
// import './App.css';
// import {useState} from "react"
// import Card from './card';
// function App(){
//   const[arr, setArray]= useState([{title:"Ferrari", price:"900000", color:"white"},{title:"Fortuner", price:"3000", color:"blue"},{title:"Toyota", price:"500000", color:"black"}]);
//   let addToCart = ()=> {
//     console.log("Add To Cart");
//   };
  

//   return (
//     <div className='App'>
//       <header className='App-header'>
//         {arr.map((e)=>(
//           <Card title={e.title} price={e.price}  color={e.color} image={e.image}action={addToCart}/>
//         ))}
//       </header>
//     </div>
//   );
// }


      
      



// export default App;
