import axios from "axios";
import { createContext,  useState } from "react";
import { useQuery } from "react-query";

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
  
  
    
    const { data, refetch:userRefetch } = useQuery({
        queryKey: ['active-user'],
        queryFn: async () => {
            const email = localStorage.getItem("email");
            const result = await axios(`http://localhost:5000/active-user/?email=${email}`)
            setUser(result?.data?.activeUser);
        }
      

    });


	const authInfo = { user, userRefetch };
	return (
		<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;