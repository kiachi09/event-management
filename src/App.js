import React from 'react';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './context/AuthContext';

function App() {
	return (
		<AuthContextProvider>
			<Navbar />
		</AuthContextProvider>
	);
}

export default App;
