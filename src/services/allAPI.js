import SERVERURL from "./serverUrl";
import commonApi from "./commonApi";


// save videoAPI use post method,used by add component, to url:http://localhost:3000/uploadVideos

export const saveVideoApi = async(videoDetails)=>{
 return  await commonApi('POST',`${SERVERURL}/uploadVideos`,videoDetails)
}


//  videiovideoAPI - use Get method,used by add component, to url:http://localhost:3000/uploadVideos
export const getAllVideoApi = async()=>{
    return  await commonApi('GET',`${SERVERURL}/uploadVideos`,"")
   }

   //  saveHistiryAPI - use Get method,used by add component, to url:http://localhost:3000/historyDetails
export const saveHistoryApi = async(historyDetails)=>{
    return  await commonApi('POST',`${SERVERURL}/history`,historyDetails)
   }


   //  getAllHistoryAPI - use Get method,used by add component, to url:http://localhost:3000/history
export const getAllHistoryApi = async()=>{
    return  await commonApi('GET',`${SERVERURL}/history`,"")

}

// Delete historyApi - delete http request to url:http://localhost:3000/history when user clicked on delete button 
export const deleteHistoryApi = async(id)=>{
    return  await commonApi('DELETE',`${SERVERURL}/history/${id}`,{})

}

// Delete videoApi - delete http request to url:http://localhost:3000/history when user clicked on delete button 
export const deleteVideoApi = async(id)=>{
    return  await commonApi('DELETE',`${SERVERURL}/uploadVideos/${id}`,{})

}


// add categoryApi - addcategory http request to url:http://localhost:3000/category when user clicked on add button 
export const addCategoryApi = async(categoryDetails)=>{
    return  await commonApi('POST',`${SERVERURL}/categories`,categoryDetails)

}

// aget categoryApi - getcategory http request to url:http://localhost:3000/category when user clicked on add button 
export const getAllCategoryApi = async()=>{
    return  await commonApi('GET',`${SERVERURL}/categories`,"")

}

// delete categoryApi - deleteCategory http request to url:http://localhost:3000/category when user clicked on delete button 
export const deleteCategoryApi = async(id)=>{
    return  await commonApi('DELETE',`${SERVERURL}/categories/${id}`,{})

}



// update categoryApi -  put http request to url:http://localhost:3000/category/id when user drops vodeo over a category
export const updateCategoryApi = async(categoryDetails)=>{
    return  await commonApi('PUT',`${SERVERURL}/categories/${categoryDetails?.id}`,categoryDetails)

}