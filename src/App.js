import React from 'react';
import EditProfile from './components/forms/EditProfile';
import Navbar from './components/navbar/Navbar';
import Submenu from './components/navbar/Submenu';
import Sidebar from './components/navbar/Sidebar';
import { AuthContextProvider } from './context/AuthContext';
import { NavContextProvider } from './context/NavContext';

function App() {
	return (
		<AuthContextProvider>
			<NavContextProvider>
				<Navbar />
				<Sidebar />
				<Submenu />
			</NavContextProvider>
			{/* <EditProfile /> */}
		</AuthContextProvider>
	);
}

export default App;
