import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
  
    useEffect(() => {
          const activeUser = () => {
				const email = localStorage.getItem("email");
				axios(`http://localhost:5000/active-user/?email=${email}`).then(
					data => setUser(data?.data?.activeUser)
				);
        };
        activeUser();
    },[])
    
	const authInfo = { user };
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;