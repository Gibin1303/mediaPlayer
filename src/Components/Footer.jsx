import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{height:'300px'}} className='mt-5 container w-100' >
      <div className='d-flex justify-content-between'>
      {/* introduction */}
       <div style={{width:'400px'}}>
       <h5><i class="fa-solid fa-music"></i>Media Player</h5>
       <p>Designed and built with all the love in the world by the Luminar team with help of our contribution</p>
       <p>code licensed luminar,does CC BY 3.0</p>
       <p>Currently v5.3.2</p>

      </div>
      {/* links */}
      <div className='d-flex flex-column'>
        <h5>Links</h5>
        <Link style={{textDecoration:'none', color:'white'}} to={'/'}>Landing page</Link>
        <Link style={{textDecoration:'none', color:'white'}} to={'/home'}>Home</Link>
        <Link style={{textDecoration:'none', color:'white'}} to={'/history'}>History</Link>

      </div>
      {/* guides */}
      <div className='d-flex flex-column'>
        <h5>Guides</h5>
        <a style={{textDecoration:'none',color:'white'}} target='_blank' href="https://getbootstrap.com/">React</a> 
          <a style={{textDecoration:'none',color:'white'}} target='_blank' href="https://react-bootstrap.netlify.app/">React Bootstrap</a> 
        <a style={{textDecoration:'none',color:'white'}} target='_blank' href="https://www.npmjs.com/package/react-router-dom">React Router Dom</a> 
      </div>
      {/* contact us */}
        <div className='d-flex flex-column'>
           <h5>Contact Us</h5>
           <div className='d-flex justify-content-between mt-3'>
             <input type="text" placeholder='Email...'  className='fom-control me-2'/>
             <button className='btm btn-info '><i class="fa-solid fa-arrow-right"></i></button>
           </div>
           <div className='d-flex justify-content-between mt-2'>
             <a style={{textDecoration:'none',color:'white'}} href="https://x.com/?lang=en&mx=2"><i class="fa-brands fa-twitter"></i></a>

             <a style={{textDecoration:'none',color:'white'}} href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>

             <a style={{textDecoration:'none',color:'white'}} href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></a>

             <a style={{textDecoration:'none',color:'white'}} href="https://www.linkedin.com/learning/"><i class="fa-brands fa-linkedin"></i></a>

             <a style={{textDecoration:'none',color:'white'}} href="https://github.com/"><i class="fa-brands fa-github"></i></a>

             <a style={{textDecoration:'none',color:'white'}} href=""><i class="fa-solid fa-phone"></i></a>
             
           </div>
        </div>
      </div>
      <p className='text-center mt-3'>Copyright © 2024 React Bootstrap. Built with Docusaurus.</p>
    </div>
  )
}

export default Footer