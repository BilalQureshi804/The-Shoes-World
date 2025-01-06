import React from 'react'
import About from '../about/page'
import { watch } from 'fs'

export const shoes = () => {


  const shoesData = [
    {id: 1, name: "jordan", price:15000, description: 'Luxury Shoes', image: '/jordan.jpg'},
    
    {id: 2, name: "adidas", price:14000, description: 'sporty and stylish', image: '/adidas.jpg'},
    
    {id: 3, name: "reebook shoes", price:15000, description: 'Luxury Shoes', image: 'reebook shoes.jpg'},
    
    {id: 4, name: "bata", price:3000, description: 'Affordable and reliable', image: '/bata shoes.jpg'},

    {id: 5, name: "nike shoes", price:18000, description: 'Luxury Shoes', image: '/nike shoes.jpg'},

    {id: 6, name: "puma shoes", price:20000, description: 'Soft and comfortable', image: '/puma shoes.jpg'},
  ]
  return (
    <div>
      <div className='shoes'>
        
       {shoesData.map((shoes)=>(
        <div key={shoes.id} className="shoes-card"> 
        <img src={shoes.image} alt={shoes.name}/>
        <h3>{shoes.name}</h3>
        <p>{shoes.description}</p>
        <div className='price'>${shoes.price}</div>
        <button className='button'>Add to cart</button>
          
        </div>
       ))}

       

      
        
      </div>
    </div>
  )
}
export default shoes;