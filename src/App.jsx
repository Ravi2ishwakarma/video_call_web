import { Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './pages/Home'
import VideoRoom from './pages/VideoRoom'

function App() {
 

  return (
    <>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='room/:roomid' element={<VideoRoom/>}/>
      </Routes>
    </>
  )
}

export default App
