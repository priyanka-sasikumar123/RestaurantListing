import React, { useEffect, useState } from 'react'
import Restcard from './Restcard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Restuarantlist() {
  //  creating state
    const[restuarantlist,setRestuarantlist]=useState([])

    //to create a function for API call
    const  getRestuarant=async()=>{
        //async await
       await fetch('/restaurants.json') //async call
       .then((data)=> data.json()    // converting this data into json format.
        .then((result)=>setRestuarantlist(result.restaurants))
       
       )}
        console.log(restuarantlist);
    useEffect(()=>{
        getRestuarant()
    },[])

    
  return (
    <Row>
        {
           
           
             restuarantlist.map(item=>(
                <Restcard restaurant={item}/>             //imported rest card.
                // <h1>{item.name}</h1>
                ))
           
           
        }
    </Row>
    
   
  )
}

export default Restuarantlist