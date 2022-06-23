import "./blog.css"
import BlogCard from './BlogCard'
import data from '../../newsData'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Blogs = () => {

  const [newsData, setNewsData] = useState();
  useEffect(() => {
    setNewsData(data.articles)
  }, [])
  
  return (
    <div className='blogs'>
        {newsData.map((curr)=>{
          var id = Date.now();
          <Link to={`/single-post/${id}`}><BlogCard key={id} newsData={curr}/></Link>
        })}        
    </div>
  )
}

export default Blogs