import React from 'react';
// import { useNavigate } from 'react-router';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
	const { googleSignIn } = UserAuth();

	const handleGoogleSignIn = async () => {
		try {
			await googleSignIn();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<nav>
			<div>
				<ul>
					<li>
						<button>Home</button>
					</li>
					<li>
						<button>About</button>
					</li>
					<li>
						<button>Contact</button>
					</li>
				</ul>
				<button onClick={handleGoogleSignIn}>Sign In</button>
			</div>
		</nav>
	);
};

export default Navbar;
