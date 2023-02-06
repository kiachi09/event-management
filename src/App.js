import './App.css';
import EditProfile from './components/forms/EditProfile';
import React from 'react';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './context/AuthContext';

function App() {
	return (
		<AuthContextProvider>
			<Navbar />
      <EditProfile />
		</AuthContextProvider>
	);

}

export default App;