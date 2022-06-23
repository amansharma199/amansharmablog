import "./home.css"
import Blogs from '../components/blogs/Blogs'
import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'

const Home = () => {
  return (
    <>
      <Header/>
      <div className='secondPage'>
        <Blogs className="blogsPage"/>
        <Sidebar className="sidebarPage"/>
      </div>
    </>
  )
}

export default Home