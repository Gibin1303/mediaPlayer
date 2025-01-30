import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { deleteVideoApi, saveHistoryApi } from '../services/allAPI';



const VideoCard =  ({displayData,setdeleteVideoResponseFromVideo,insideCategory}) => {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = async () => {
    setShow(true);

    const {caption,YoutubeLink} = displayData
    const sysDateTime = new Date()
    console.log(sysDateTime);
    sysDateTime.toLocaleString('en-us',{timeZoneName:"short"})
    const timeStamp = sysDateTime.toLocaleString('en-us',{timeZoneName:"short"})
    const historyDetails = {caption,YoutubeLink,timeStamp}
            try{
                await saveHistoryApi(historyDetails)
            }catch(err){
              console.log(err);
              
            }
    
  }


  const removeVideo = async (id)=>{
    try{
     const historyData =  await deleteVideoApi(id)
          setdeleteVideoResponseFromVideo(historyData)
    }catch(err){
       console.log(err);    
    }

  }

 const videoCardDragStarted = (e,dragVideoDetails)=>{
         console.log("inside drag",dragVideoDetails?.id);
          // share dat using event drag start
          e.dataTransfer.setData("videoDetails",JSON.stringify(dragVideoDetails))
        
 }


  return (
    <>
         <Card draggable={true} onDragStart={e=>videoCardDragStarted(e,displayData)} style={{ width: '250px' }}>
      <Card.Img onClick={handleShow} variant="top" height={'150px'} src= {displayData?.imageUrl} />
      <Card.Body>
        <Card.Text className='d-flex justify-content-between align-items-center'>
         <p>{displayData?.caption}</p>
               {

                  !insideCategory &&
                  <button className='btn' onClick={()=>removeVideo(displayData?.id)}><i class="fa-solid fa-trash text-danger"></i></button>

               }
        </Card.Text>
      </Card.Body>
    </Card>


    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="480" src={`${displayData?.YoutubeLink}?autoplay=1`} title="ARM (Malayalam) - Trailer |Tovino Thomas,Krithi Shetty |Jithin Laal |Dhibu Ninan Thomas|Magic Frames" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default VideoCard