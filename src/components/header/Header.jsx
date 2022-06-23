import "./header.css"

const Header = () => {
  return (
    <div className='header'>
      <div className="headerWrapper">
        <div className='header-title'>
          <h1>Blog</h1>
        </div>
        <div className='header-img'>
          <img src='/assets/header_img.jpeg'/>
        </div>
      </div>
    </div>
  )
}

export default Header