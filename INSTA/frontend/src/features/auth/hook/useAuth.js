import {useContext} from 'react';
import { AuthContext } from '../Auth.contex';
import { loginUser,registerUser } from '../service/auth.api';

export const useAuth=()=>{

    const Context =useContext(AuthContext)

    const {user ,setUser,loading,setLoading }=Context

    const handleLogin=async(email,password)=>{

        setLoading(true);

        const response=await loginUser(email,password)

        setUser(response.user)

        setLoading(false)

    }


     const handleRegister=async(username,bio,email,password)=>{

        setLoading(true);

        const response=await registerUser(username,bio,email,password)

        setUser(response.user)

        setLoading(false)

    }
     return {
        user, loading, handleLogin, handleRegister
    }

}

