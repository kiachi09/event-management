import React from 'react';
import { useNavigate } from 'react-router';

const navigate = useNavigate();

const Navbar = () => {

	const handleSubmit = () => {
		// navigate('/login');
		console.log('clicked');
	}

	return (
		<nav>
			<div>
				<ul >
					<li>
						<a href='#'>Home</a>
					</li>
					<li>
						<a href='#'>About</a>
					</li>
					<li>
						<a href='#'>Contact</a>
					</li>
				</ul>
				<button onSubmit={handleSubmit}>Sign In</button>
			</div>
		</nav>
	);
};

export default Navbar;
