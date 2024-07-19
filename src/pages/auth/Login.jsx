import React from 'react';
import { useState } from 'react';
import '../../css/Auth.css';
import { FaGithub, FaGoogle, FaTwitter,FaEye, FaEyeSlash } from 'react-icons/fa6';

const Login = () => {
	const [passwordVisible, setPasswordVisible] = useState(false);
	const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
	return (
		<div className="form-container mb-4">
			<p className="title">Login</p>

			<form className="form">
				<div className="input-group">
					<label htmlFor="username">Email</label>
					<input type="email" name="email" id="email" placeholder="" />
				</div>
				<div className="input-group">
					<label htmlFor="password">Password</label>
					<div class="password-container">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                id="password"
                placeholder=""
              />
              <button
                type="button"
                class="password-toggle"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
					<div className="forgot">
						<a rel="noopener noreferrer" href="#">Forgot Password ?</a>
					</div>
				</div>
				<button className="sign">Sign in</button>
			</form>

			<div className="social-message">
				<div className="line"></div>
				<p className="message">Login with social accounts</p>
				<div className="line"></div>
			</div>

			<div className="social-icons">
				<button aria-label="Log in with Google" className="icon">
					<FaGoogle />
				</button>
				<button aria-label="Log in with Twitter" className="icon">
					<FaGithub />
				</button>
				<button aria-label="Log in with GitHub" className="icon">
					<FaTwitter />
				</button>
			</div>

			<p className="signup">Don't have an account?
				<a rel="noopener noreferrer" href="/auth/signup"> Sign up</a>
			</p>

		</div>
	)
}

export default Login;