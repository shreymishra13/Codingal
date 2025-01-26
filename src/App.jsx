
import Home from './Pages/HomePage/Home'
import Class from './Pages/ClassPage/Class'
import Posts from './Pages/PostsPage/Posts'
import Error404 from './Pages/ErrorPage/Error404'
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
