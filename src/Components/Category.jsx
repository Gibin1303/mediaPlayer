import React, { useEffect } from 'react'
import { useState } from 'react';
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap' 
import { addCategoryApi, deleteCategoryApi, deleteVideoApi, getAllCategoryApi, updateCategoryApi } from '../services/allAPI';
import VideoCard from './VideoCard';


 const Category = ({setdeleteResponseFromCategory,deleteResponseFromView}) =>{
  const[categoryDatas,setAllCategoryData] = useState([])
  const [show, setShow] = useState(false);
  const [categoryName,setcategoryName] = useState('')
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    categoryData()
  },[deleteResponseFromView])
      
    const SaveCategory = ()=>{
      if(categoryName){
             const categoryDetails = {categoryName,allVideo:[]}
             try{
              const result =  addCategoryApi(categoryDetails)
                  alert("category created")
                  categoryData()
                  handleClose()
               
                 }
             catch(err){
              console.log(err);
              
             }
      }else{
        alert("please provide a category name")
      }
    }


   const categoryData = async()=>{
        try{
         const res = await getAllCategoryApi()
          setAllCategoryData(res.data)
        }catch(err){
          console.log(err);
          
        }
   }
   
     const removeCategory = (id)=>{
      try{
          deleteCategoryApi(id)
          categoryData()
      }catch(err){
        console.log(err);
        
      }
     }

     const dragOverCategory =(e)=>{
          e.preventDefault()
     }

    const videoCardDropOverCategory = async(e,data)=>{
         console.log(data);
      const videoDetails = JSON.parse( e.dataTransfer.getData("videoDetails"))
      console.log(videoDetails);
        
      // update category by adding video to allvideo key in json server
        data.allVideo.push(videoDetails)
         console.log(data);
        //  api call to update the category

        await updateCategoryApi(data)
        categoryData()
       const result =  await deleteVideoApi(videoDetails?.id)
       setdeleteResponseFromCategory(result)
    } 
     
    const categoryVideoDragStarted=(e,dragVideoDeatils,categoryDetails)=>{
            let dragData = {video:dragVideoDeatils,categoryDetails}
            e.dataTransfer.setData("dragData",JSON.stringify(dragData))
          
            
    }
          
  return (
         <>
     <div className='d-flex justify-content-around align-items-center'>
        <h3>All Ctegories</h3>
        <button onClick={handleShow }  className='btn btn-info ms-3 rounded-circle fw-bolder fs-5'>+</button>
     </div>

     {/* display all categories */}
        
        <div className="container-fluid p-3 m-3">
                
        {
           categoryDatas?.length>0?
          categoryDatas.map((data)=>(
            <div droppable="true" onDragOver={dragOverCategory} onDrop={e=>videoCardDropOverCategory(e,data)} className="border rounded mb-3" key={data.id}>
                                <div  className='d-flex justify-content-between p-2 align-items-center'>
                                   <h5>{data.categoryName}</h5>
                                   <button onClick={()=>removeCategory(data.id)} className="btn"><i class="fa-solid fa-trash text-danger"></i></button>
                                  </div>
                                    {/* display category video */}
                                  <div className='row mt-2'>
                                        
                                          
                                           {
                                            data?.allVideo?.length>0 &&
                                            data?.allVideo?.map(video=>(
                                              <div draggable={true} onDragStart={e=>categoryVideoDragStarted(e,video,data)} className='col-lg-4'>
                                              {/* voideo card */}
                                              <VideoCard insideCategory={true} displayData={video}/>
                                          </div>
                                            ))
            
                                           }
                                         
                                        
                                  </div>
                                
      
      
              </div>
          ))
          :
          <div>No data found</div>
        }
                  

</div>


     {/* modal */}

     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel controlId="floatingCategoryName" label="category">
        <Form.Control type="text" placeholder="Category Name" onChange={e=>setcategoryName(e.target.value)} />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={SaveCategory} variant="primary" className='btn btn-info'>Add</Button>
        </Modal.Footer>
      </Modal>

</>
)

 }
export default Category