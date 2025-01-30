import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
          <Navbar style={{zIndex:1}} className="bg-info position-fixed w-100">
        <Container>
       
   <Link to={'/'} style={{textDecoration:"none"}}>
   <Navbar.Brand style={{color:'#fff'}} href="#home" className='fw-bolder'>
          <i class="fa-solid fa-music"></i>
            Media player
          </Navbar.Brand>
   </Link>
        
        </Container>
      </Navbar>
    </div>
  )
}

export default Header