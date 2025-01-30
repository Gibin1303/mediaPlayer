import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/landing.gif'
import feature_1 from '../assets/feature1.gif'
import feature_2 from '../assets/feature2.gif'
import feature_3  from '../assets/feature3.gif'
import { Button, Card } from 'react-bootstrap'




const Landing = () => {
  return (
    <div  style={{paddingTop:'100px'}} className='container'>
      <div className='row align-items-center'>

        <div className='col-lg-5'>
           <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
           <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam illo architecto voluptatem nemo totam, omnis necessitatibus dignissimos eligendi autem, natus dolores nihil illum odio aspernatur recusandae consectetur. Error </p>
           <Link to='/home' className='btn btn-info'>Get Started</Link>
        </div>
        <div className='col'></div>

        <div className='col-lg-6'>
           <img src={landingImg} alt="" className='img-fluid' />
        </div>
        

      </div>
      {/*  feature part */}
      <div>
         <h3 className='text-center'>Features</h3>
         <div className='my-5'>

          <div className='row mt-5'>
             <div className='col-lg-4'>
             <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={feature_1} />
      <Card.Body>
        <Card.Title className='text-warning' >Managing Videos</Card.Title>
        <Card.Text className='text-white'>
         User can view, upload and delete videos.
        </Card.Text>
      </Card.Body>
    </Card>
             </div>

             <div className='col-lg-4'>
             <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={feature_2} />
      <Card.Body>
        <Card.Title className='text-warning'>Favourite Videos</Card.Title>
        <Card.Text className='text-white'>
         Add your favourate playlist to hear thousands of times with your family and friends
        </Card.Text>
      </Card.Body>
    </Card>
             </div>


             <div className='col-lg-4'>
             <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={feature_3} />
      <Card.Body>
        <Card.Title className='text-warning'>Categorize videos </Card.Title>
        <Card.Text className='text-white'>
           Users can categorise videos based on their interests
        </Card.Text>
      </Card.Body>
    </Card>
             </div>

          </div>
           
         </div>
      </div>

      {/* last section */}

      <div className=' row my-5  align-items-center border rounded p-5'>
      <div className='col-lg-5'>
        <h3 className='text-warning'>Simple, fast and Powerful</h3>
        <p  style={{textAlign:'justify'}}><span className='fw-bolder fs-5'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa in, cumque soluta nesciunt </p>

        <p style={{textAlign:'justify'}}><span className='fw-bolder fs-5'>Category Videos</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa in, cumque soluta nesciunt </p>

        <p style={{textAlign:'justify'}}><span className='fw-bolder fs-5'>Managing History</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa in, cumque soluta nesciunt </p>
      </div>
      <div className='col'></div>
      <div className='col-lg-6'>
      <iframe width='100%' height='480' src="https://www.youtube.com/embed/aAkMkVFwAoo" title="Mariah Carey - All I Want for Christmas Is You (Make My Wish Come True Edition)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
</div>

  )
}

export default Landing