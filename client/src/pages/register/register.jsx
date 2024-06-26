import React from 'react';

const Register = () => {
	return (
		<div className="auth">
			<h1>Login</h1>
			<form>
				<input
					required
					type="text"
					placeholder="username"
				/>
				<input
					required
					type="email"
					placeholder="email"
				/>
				<input
					required
					type="password"
					placeholder="password"
				/>
				<button type="submit">Register</button>
				<p>This is an error</p>
				<span>
					Do you have an account? <Link to="/login">Log in</Link>
				</span>
			</form>
		</div>
	);
};

export default Register;
