import { useContext, createContext } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const googleSignIn = () => {
		const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
		// signInWithRedirect(auth, provider);
	};
	const logOut = () => {
		auth.signOut();
	};
	return (
		<AuthContext.Provider value={{ googleSignIn, logOut }}>
			{children}
		</AuthContext.Provider>
	);
};

export const UserAuth = () => {
	return useContext(AuthContext);
};
