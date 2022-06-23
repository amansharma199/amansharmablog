import { useState } from "react";
import { Link } from "react-router-dom"
import "./login.css"

const Login = () => {

    const [username, setUsername] = useState("");
    const userInputHandle = (e) => {
        setUsername(e.target.value);
    }
    const [password, setPassword] = useState("");
    const passwordInputHandle = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = (e) => {
        e.preventDefault();
        if (username && password) {
            alert("data stored")
            setUsername("");
            setPassword("");
        } else { alert('Please fill the Data') }

    }


    return (
        <div className='login'>
            <div className="login-bg-img">
                <img src="assets/login-img.jpg" />
            </div>
            <div className="login-form">
                <form className="login-form-style" action="#">
                    <h2 className="login-title">Login</h2>
                    <label className="login-label">Username</label>
                    <input type="text" value={username} onChange={userInputHandle} className="input" id="login-username" />
                    <label className="login-label">Password</label>
                    <input type="password" onChange={passwordInputHandle} className="input" id="login-password" />
                    <div className="checkbox">
                        <input type="checkbox" />
                        <label>Remember Me</label>
                    </div>
                    <button onClick={handleLogin} className="input login-button">Login</button>
                    <p className="forgot-password">Forgot Password?</p>
                </form>
                <div className="login-line">
                    <div> or </div>
                    <hr />
                </div>
                <div className="already-user-btn">
                    Need a Account? <Link to="/register">SIGN UP</Link>
                </div>
            </div>
        </div>
    )
}

export default Login