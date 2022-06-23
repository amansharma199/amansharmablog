import "./blogCard.css"

const BlogCard = ({newsData}) => {
  return (
    <div className='blogCard'>
        <div className='blogCard-top'>
            <img src='/assets/header_img.jpeg'/>
            {console.log(newsData)}
            {console.log("aman sharma")}
        </div>
        <div className='blogCard-bottom'>
            <div className="blogCard-categories">
                <ul>
                    <li>Music</li>
                    <li>Life</li>
                </ul>
            </div> 
            <div className="blogCard-title">
                lorem  
            </div>
            <div className="blogCard-time">
                2 hours ago
            </div>
            <div className="blogCard-disc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi iure nostrum nemo veniam porro aspernatur ducimus nobis explicabo tenetur eos maxime quas eaque quis praesentium quibusdam, velit soluta delectus quos suscipit voluptatibus nam. Fuga corporis saepe harum voluptas officiis voluptatem nisi ab voluptates nemo reprehenderit explicabo tempore voluptate recusandae temporibus minus assumenda, debitis libero, sapiente veritatis odit veniam. Voluptatem corporis similique debitis ad, modi sed ratione labore, dolor adipisci odit animi eum, atque quod tempora omnis facilis nemo nam vel ex nesciunt nostrum! Praesentium obcaecati, excepturi ullam nostrum minus pariatur tempora culpa, repellat iure, optio neque debitis? Accusamus fuga non voluptatum, provident in molestiae dolorem animi? Optio nemo distinctio nostrum at sit sapiente dolorem aliquid culpa dolorum, tenetur ex corrupti nesciunt. Velit nam explicabo molestias deleniti architecto, quas minima quod laudantium eaque dolores, illum facilis animi modi sequi impedit. Harum quasi, asperiores fugit aut illo commodi? Laudantium maiores numquam nulla quasi porro, voluptatum quisquam.
            </div>
        </div>
    </div>
  )
}

export default BlogCard