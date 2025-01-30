import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import Category from '../Components/Category'
import View from '../Components/View'
import React, { useState } from 'react'




const Home = () => {
  const[deleteResponseFromView,setDeleteResponseFromView]=useState("")
  const[deleteResponseFromCategory,setdeleteResponseFromCategory]=useState("")
   const [addResponseFromHome,setAddResponseFromHome] = useState("")
  return (
    <div style={{paddingTop:'100px'}}>
       <div className='container mb-5 d-flex justify-content-between'>
          <Add setAddResponseFromHome={setAddResponseFromHome}/>
          <Link to={'/history'}>Watch history</Link>
       </div>
       <div className='container-fluid row my-5'>
          <div className="col-lg-6">
            <h3>All Videos</h3>
            <View setDeleteResponseFromView={setDeleteResponseFromView} addResponseFromHome={addResponseFromHome} deleteResponseFromCategoy={deleteResponseFromCategory} />
          </div>

          <div className="col-lg-6">
            <Category deleteResponseFromView={deleteResponseFromView} setdeleteResponseFromCategory={setdeleteResponseFromCategory}/>
          </div>
       </div>
       <view/>
    </div>
  )
}

export default Home