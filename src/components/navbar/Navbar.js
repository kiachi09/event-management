import React from 'react';
// import { useNavigate } from 'react-router';
import { UserAuth } from '../../context/AuthContext';
// import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { links } from './data';
import { useGlobalContext } from '../../context/NavContext';
import { FaSearch } from 'react-icons/fa';
import logo from '../../assets/images/logo.svg';
import {
	AppBar,
	Toolbar,
	createTheme,
	ThemeProvider,
	Box,
} from '@mui/material';

const Navbar = () => {
	const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
	const displaySubmenu = e => {
		const page = e.target.textContent;
		const tempBtn = e.target.getBoundingClientRect();
		const center = (tempBtn.left + tempBtn.right) / 2;
		const bottom = tempBtn.bottom - 3;
		openSubmenu(page, { center, bottom });
	};

	const handleSubmenu = e => {
		if (!e.target.classList.contains('link-btn')) {
			closeSubmenu();
		}
	};

	const customTheme = createTheme({
		palette: {
			secondary: {
				main: '#DBA6F7',
			},
		},
	});
	const { googleSignIn } = UserAuth();

	const handleGoogleSignIn = async () => {
		try {
			await googleSignIn();
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<ThemeProvider theme={customTheme}>
			<AppBar position="static" color={'secondary'} onMouseOver={handleSubmenu}>
				<Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
					<button className="btn toggle-btn" onClick={openSidebar}>
						<FaBars />
					</button>
					<img src={logo} alt="logo" />
					<ul className="links">
						{links.map(link => {
							const { id, text } = link;
							return (
								<li key={id}>
									<button className="link-btn" onMouseOver={displaySubmenu}>
										{text}
									</button>
								</li>
							);
						})}
					</ul>
					<Box
						sx={{
							alignItems: 'center',
							justifyContent: 'space-between',
							width: '100px',
						}}
					>
						<button
							style={{
								float: 'left',
								backgroundColor: '#DBA6F7',
								borderColor: 'transparent',
							}}
						>
							<FaSearch />
						</button>
						<button onClick={handleGoogleSignIn} className="SignInBtn">
							Sign In
						</button>
					</Box>
				</Toolbar>
			</AppBar>
		</ThemeProvider>
	);
};

export default Navbar;
