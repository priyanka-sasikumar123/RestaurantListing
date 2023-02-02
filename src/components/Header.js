import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="No-logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ70ZsEYz93a112LyaWAFGZ7BExiZecWWZJ4HS0kJQ&s"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            &nbsp;Find Your Restaurant
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header