import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';
import ViewRest from './ViewRest';

function Restop({op}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div><Button className='mt-3 ' style={{marginLeft:"2px"}} variant="dark" onClick={handleShow}>
    Operating Hours
  </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Operating Hours</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <ListGroup>
      <ListGroup.Item  variant="light">Monday:{op.Monday}</ListGroup.Item>
      <ListGroup.Item variant="light">Tuesday:{op.Tuesday}</ListGroup.Item>
      <ListGroup.Item variant="light">Wednesday:{op.Wednesday}</ListGroup.Item>
      <ListGroup.Item variant="light">Thursday:{op.Thursday}</ListGroup.Item>
      <ListGroup.Item variant="light">Friday:{op.Friday}</ListGroup.Item>
      <ListGroup.Item variant="light">Saturday:{op.Saturday}</ListGroup.Item>
      <ListGroup.Item variant="light">Sunday:{op.Sunday}</ListGroup.Item>
    </ListGroup>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal></div>
  )
}

export default Restop