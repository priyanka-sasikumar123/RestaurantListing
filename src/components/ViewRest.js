import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Restop from './Restop'
import Reviews from './Reviews';
function ViewRest() {
    const urlParams=useParams()
    console.log(urlParams.id);
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
    const viewrest=restuarantlist.find(item=>item.id==urlParams.id)
    console.log(viewrest);
  return (
    <div>{
     viewrest?(
        <Row>
        <Col style={{marginLeft:"5px"}} md={3}>
          <Image className='mt-2' src={viewrest.photograph} style={{width:'550px',height:'500px'}} fluid/>
        </Col>
        <Col md={8} className='mt-1'>
        <h2>{viewrest.name}</h2>
        <ListGroup>
      <ListGroup.Item>ID:{viewrest.id}</ListGroup.Item>
      <ListGroup.Item>Name:{viewrest.name}</ListGroup.Item>
      <ListGroup.Item>CuisineType:{viewrest.cuisine_type}</ListGroup.Item>
      <ListGroup.Item>Address:{viewrest.address}</ListGroup.Item>
      <ListGroup.Item>Neighborhood:{viewrest.neighborhood}</ListGroup.Item>
      </ListGroup>
      <><Restop op={viewrest.operating_hours}/></>
      <><Reviews rev={viewrest.reviews}/></>
        </Col>
      </Row>
     ):"null"
    }</div>
  )
}

export default ViewRest