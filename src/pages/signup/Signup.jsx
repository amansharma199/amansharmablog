import "./signup.css"
import { Link } from 'react-router-dom'
import { useState } from "react";

const Signup = () => {

    const [username, setUsername] = useState("");
    const userInputHandle = (e) => {
        setUsername(e.target.value)
    }
    const [password, setPassword] = useState("");
    const passwordInputHandle = (e) => {
        setPassword(e.target.value)
    }

    const handleSignup = (e) => {
        e.preventDefault();
        if (username && password) {
            alert("data stored")
            setUsername("");
            setPassword("");
        } else { alert('Please fill the Data') }

    }

  return (
    <div className='signup'>
            <div className="signup-bg-img">
                <img src="assets/login-img.jpg" />
            </div>
            <div className="signup-form">
                <form className="signup-form-style">
                    <h2 className="signup-title">signup</h2>
                    <label className="signup-label">Username</label>
                    <input type="text" className="input" value={username} onChange={userInputHandle} />
                    <label className="signup-label">Password</label>
                    <input type="password" className="input" value={password} onChange={passwordInputHandle} />
                    
                    <button className="input signup-button" onClick={handleSignup}>Register</button>
                </form>
                <div className="signup-line">
                    <div> or </div>
                    <hr/>
                </div>
                <div className="already-user-btn">
                    Already have a Account? <Link to="/login">Login</Link>
                </div>
            </div>
        </div>
  )
}

export default Signup