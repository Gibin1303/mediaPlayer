

import { Routes,Route } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import Home from './pages/Home'
import History from './pages/History'
import Header from './Components/Header'
import Footer from './Components/Footer'


function App() {

  return (
    <>

{/* header */}

     <Header/>


      {/* path for home,landing,hostory */}
      <Routes>
     
     <Route path='/' element={<Landing/>}/>
     <Route path='/home' element={<Home/>}/>
     <Route path='/history' element={<History/>}/>
          
      </Routes>

      {/* footer */}

      <Footer/>

    </>
  )
}

export default App
