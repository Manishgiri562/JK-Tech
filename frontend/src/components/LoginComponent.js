import React, {useState} from 'react';
import './Login.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

      const dispatch = useDispatch();

	const login = async (email, password) => {
		const response = await fetch('http://localhost:3000/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({email, password}),
		});
		const data = await response.json();
		if(data.access_token){
                  localStorage.setItem('token', data.access_token);
            }
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log('Email:', email, 'Password:', password);
		await login(email, password);
	};

	return (
		<div className="login-container">
			<form className="login-form" onSubmit={handleSubmit}>
				<h2>Login</h2>
				<div className="input-group">
					<label>Email</label>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className="input-group">
					<label>Password</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default Login;
