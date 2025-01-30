import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { Col, Row } from 'react-bootstrap'
import { getAllVideoApi, saveVideoApi, updateCategoryApi } from '../services/allAPI'


const View = ({addResponseFromHome,deleteResponseFromCategory,setDeleteResponseFromView}) => {

  const[deleteVideoResponseFromVideo,setdeleteVideoResponseFromVideo] = useState("")
  const[allVideo,setAllVideo]= useState([])
  
useEffect(()=>{
  videoData()
},[addResponseFromHome,deleteVideoResponseFromVideo,deleteResponseFromCategory])
  
console.log(allVideo);

       
      const  videoData = async ()=>{
        try{
           const  result = await getAllVideoApi()
           console.log(result)
           if(result.status>=200 && result.status<300){
            setAllVideo(result.data)
           }
         
        }catch(err){ 
         console.log(err);
        }
      }

      const dragOverView=(e)=>{
              e.preventDefault()
      }

      const eventCategoryVideoDropOverView = async(e)=>{
            console.log("view category");
           const {video,categoryDetails} =  JSON.parse(e.dataTransfer.getData("dragData"))
            console.log(video,categoryDetails);
             const updatedCategoryVideoDetails = categoryDetails?.allVideo?.filter(item=>item.id!=video?.id)
             const updatedCategory = {...categoryDetails,allVideo:updatedCategoryVideoDetails}
            //  console.log(updatedCategory);
             
            // updating category by deleteing video from category
           const result =  await updateCategoryApi(updatedCategory)
            // use state lifting
            setDeleteResponseFromView(result)
            // use api to upload video
            await saveVideoApi(video)
            //  use category video function
              videoData()
           
      }


        
    
  return (
    <>
    <div>
        <Row droppable="true" onDragOver={dragOverView} onDrop={e=>eventCategoryVideoDropOverView(e)}>
           {
            allVideo?.length>0?
            allVideo.map(video=>(
              <Col className='mb-2' sm={12} md={6} lg={4}>
              <VideoCard displayData={video} setdeleteVideoResponseFromVideo={setdeleteVideoResponseFromVideo}/>
          </Col>
            ))
            :
            <div className='fw-bolder text-danger fs-5'>no video uploaded yet</div>
           }
        </Row>
    </div>
    
    </>
  )
}

export default View
