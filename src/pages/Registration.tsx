import "../App.css";
import { BsGoogle } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineLock } from 'react-icons/ai';

function Registration() {
  return (
    <div className="registration-main-wrapper">
        <div className="registration-wrapper">
            <p className="top-registration">Registration</p>
            <div className="registration-form-container">
                <label className="username-container">
                    <p>Username</p>
                    <div className="username-input-container">
                        <div className="registration-icon-user"><AiOutlineUser /></div>
                        <input type="text" placeholder="Type your username"/>
                    </div>
                </label>
                <div className="registration-separator"></div>
                <label className="password-container">
                    <p>Password</p>
                    <div className="password-input-container">
                        <div className="registration-icon-lock"><AiOutlineLock /></div>
                        <input type="text" placeholder="Type your username"/>
                    </div>
                </label>
                <div className="registration-separator"></div>
            </div>
            <div className="registration-forgot-password-container">
                <p className="registration-forgot-password">Forgot password ?</p>
            </div>
            <button className="registration-btn">REGISTRATION</button>
            <p className="signup-social">Or Sign In Using</p>
            <div className="registration-social-container">
                <div className="registration-icon-google"><BsGoogle /></div>
                <div className="registration-icon-facebook"><FaFacebookF /></div>
                <div className="registration-icon-twitter"><FiTwitter /></div>
            </div>
        </div>
    </div>
  );
}

export default Registration;