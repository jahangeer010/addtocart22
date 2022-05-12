import React from 'react'


function ProductCards(props) {
    
          
  return (
    <div>
     
     
      <img className="card-img-top image" src={props.image} alt="Card image cap"/>
      
          <h4 className="card-title image">{props.title}</h4>
          
          <h6 className="card-title image">{props.price}</h6>
          <h5 className="card-title image">Description</h5>
          <p className="card-text">With supporting text below  natural lead-in to additional content.</p>
          <a href="#" className="btn btn-primary button " >Add to Cart</a>
     

 

  </div>
  
  
  
  )
}

export default ProductCards