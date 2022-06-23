import { useState } from "react"
import { Link } from "react-router-dom"
import "./navbar.css"


const Navbar = () => {
    const [isLogin, setIsLogin] = useState(false)
    return (
        <div className='navbar'>
            <div className='navbarWrapper'>
                <div className='navbar-logo'>Aman's Blog</div>
                <div className='navbar-menu'>
                    <ul className='navbar-ul'>
                        <li className='navbar-li'><Link to="/">Home</Link></li>
                        <li className='navbar-li'><Link to="/about">About</Link></li>
                        <li className='navbar-li'><Link to="/services">Services</Link></li>
                        <li className='navbar-li'><Link to="/contact">Contact</Link></li>
                       {isLogin? <li className='navbar-li'><Link to="/">Logout</Link></li>:null}

                </ul>
            </div>
            <div className='navbar-login-signup'>
                {isLogin ? (<div className='navbar-profile'>
                    <img src='/assets/ProfilePic.jpeg' />
                </div>) : <ul className="navbar-ul">
                    <Link to="/login"><li className="navbar-li">Login</li></Link>
                </ul>
                }

            </div>
        </div>
    </div >
  )
}

export default Navbar