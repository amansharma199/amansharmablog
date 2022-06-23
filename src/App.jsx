import { BrowserRouter, Route, Routes} from "react-router-dom"
import "./app.css"
import Navbar from './components/navbar/Navbar'
import Home from "./pages/Home"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import SinglePost from "./pages/singlePost/SinglePost"

const App = () => {
  return (
    <>
    
    <BrowserRouter>
    <Navbar/> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/single-post/1" element={<SinglePost/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Signup/>}/>        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App