
import Home from './Pages/Home'
import Class from './Pages/Class'
import Posts from './Pages/Posts'
import Error404 from './Pages/Error404'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  


  return (
   
  <>
   
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/class" element={<Class />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="*" element={<Error404/>} />
      </Routes>
    </Router>
  </>
  )
}

export default App
