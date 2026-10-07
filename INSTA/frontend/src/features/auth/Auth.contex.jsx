import {createContext, useState} from "react";

const AuthContext = createContext();

export const Authcontextprovider = ({children})=>{
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(false);

     return(
        <AuthContext.Provider value={{user, setUser, loading, setLoading}}>
            {children}
        </AuthContext.Provider>
     )
}