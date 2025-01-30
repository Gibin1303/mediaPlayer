import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteHistoryApi, getAllHistoryApi } from '../services/allAPI'

const History = () => {
  const[allVideoHistory,setallVideoHistory] = useState([])

      useEffect(()=>{
           historyData()
      },[])

      console.log(allVideoHistory);
      

    const historyData = async ()=>{
        try{
        const result =  await getAllHistoryApi()
        console.log(result);
         if(result.status>=200 && result.status<300){
           setallVideoHistory(result.data)
         }else{
            console.log(result);
            
         }
        }catch(err){
         console.log(err);
         
        }
    }

    const deleteHstoryData = async(id) =>{
      try{
            await deleteHistoryApi(id)  
          historyData()
      }catch(err){
        console.log(err);
        
      }
    }

  return (
    <div style={{paddingTop:'100px'}}>
        <div className="container d-flex justify-content-between">
           <h1>Watch History</h1>
           <Link to={'/home'}>Back to home</Link>
        </div>

        <table className='table my-5'>
            <thead>
              <tr>
                <th>#</th>
                <th>Caption</th>
                <th>Time Stamp</th>
                <th>Link</th>
                <th>...</th>
              </tr>
            </thead>
            <tbody>
                 {
                  allVideoHistory?.length>0?
                  allVideoHistory.map((history,index)=>(

                    <tr key={history?.id}>
                    <td>{index+1}</td>
                    <td>{history.caption}</td>
                    <td>{history.timeStamp}</td>
                    <td><a href={history.YoutubeLink}>{history.YoutubeLink}</a></td>
                    <td><button onClick={()=>deleteHstoryData(history?.id)} className='btn'><i  class="fa-solid fa-trash text-danger"></i></button></td>
                  </tr>
                  ))
                  :
                  <div className='text-danger text-center mt-3' style={{fontSize:'28px'}}>No Previous Watch History</div>
                 }
              </tbody>
        </table>
    </div> 
  )
}

export default History