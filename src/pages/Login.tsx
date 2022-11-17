import "../App.css";
import { BsGoogle } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineLock } from 'react-icons/ai';


function Login() {
  return (
    <div className="login-main-wrapper">
        <div className="login-wrapper">
            <p className="top-login">Login</p>
            <div className="login-form-container">
                <label className="username-container">
                    <p>Username</p>
                    <div className="username-input-container">
                        <div className="login-icon-user"><AiOutlineUser /></div>
                        <input type="text" placeholder="Type your username"/>
                    </div>
                </label>
                <div className="login-separator"></div>
                <label className="password-container">
                    <p>Password</p>
                    <div className="password-input-container">
                        <div className="login-icon-lock"><AiOutlineLock /></div>
                        <input type="text" placeholder="Type your password"/>
                    </div>
                </label>
                <div className="login-separator"></div>
            </div>
            <div className="login-forgot-password-container">
                <p className="login-forgot-password">Forgot password ?</p>
            </div>
            <button className="login-btn">LOGIN</button>
            <p className="signup-social">Or Sign Up Using</p>
            <div className="login-social-container">
                <div className="login-icon-google"><BsGoogle /></div>
                <div className="login-icon-facebook"><FaFacebookF /></div>
                <div className="login-icon-twitter"><FiTwitter /></div>
            </div>
        </div>
    </div>
  );
}

export default Login;