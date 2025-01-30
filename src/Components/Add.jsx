import React from 'react'
import { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap'
import { saveVideoApi } from '../services/allAPI'



const Add = ({setAddResponseFromHome}) => {
      const[invalidYoutubeLink,setInvalidYoutubeLink]=useState(false)
      const[videoDetails,setVideoDeatials]=useState({
        caption:'',imageUrl:'',YoutubeLink:''

      })

      

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const extractingEmbedLinkFromYoutubelink=(userInputYoutubeLink)=>{
         if(userInputYoutubeLink.includes("https://www.youtube.com/watch?v=")){          
          const videoId=userInputYoutubeLink.split("v=")[1].slice(0,11)
          setInvalidYoutubeLink(false) 
          setVideoDeatials({...videoDetails,YoutubeLink:`https://www.youtube.com/embed/${videoId}`})

         }else{
          setInvalidYoutubeLink(true)
          setVideoDeatials({...videoDetails,YoutubeLink:""})

         }
         console.log(videoDetails);
         
    }



    const handleUploadVideo = async()=>{
   const {caption,imageUrl,YoutubeLink} = videoDetails

      if(caption && imageUrl && YoutubeLink){
          try{
             const result = await saveVideoApi(videoDetails)
             console.log(result);
             if(result.status>=200 && result.status<300){    
              alert("video added successfully!!")   
              handleClose()
              setAddResponseFromHome(result)
             }
          }catch(err){
            console.log(err);  
          }
      }else{
        alert("please fill the form")
      }
    }

        

    

    // <iframe width="1148" height="480" src="https://www.youtube.com/embed/J_IGeQcBegU" title="What is a Winning Product? | Advanced level | Malayalam | Dropshipper&#39;s must watch" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


  return (
    <>
      <div className='d-flex align-items-center'>
        <h1>Upload New Video</h1>
        <button onClick={handleShow} className='btn btn-warning ms-3 rounded-circle fw-bolder fs-5'>+</button>
      </div> 

      
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Uploading video details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='border rounded p-3'>

        <FloatingLabel controlId="floatingCaption" label="Video Caption">
        <Form.Control onChange={e=>setVideoDeatials({...videoDetails,caption:e.target.value})} type="text" placeholder="Video Caption" />
      </FloatingLabel>

      <FloatingLabel className='mt-2' controlId="floatingUrl" label="Video Image Url">
        <Form.Control  onChange={e=>setVideoDeatials({...videoDetails,imageUrl:e.target.value})} type="password" placeholder="Video Image Url" />
      </FloatingLabel>

      <FloatingLabel className='mt-2' controlId="floatingLink" label="Video Youtube Link">
        <Form.Control  onChange={e=>extractingEmbedLinkFromYoutubelink(e.target.value)} type="password" placeholder="Video Youtube Link" />
      </FloatingLabel>
          {
            invalidYoutubeLink &&
            <div className='text-danger fw-bolder'>
              Invalid youtube link..
            </div>
          }
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUploadVideo} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Add