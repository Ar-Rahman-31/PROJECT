import {useContet} from 'react';
import { AuthContext,  } from '../Auth.contex';
import { loginUser,registerUser } from '../service/auth.api';

export const auseAuth=()=>{

    const Context =useContet(AuthContext)

    const {user ,setuser,loading,setloading }=Context

    const handleLogin=async(email,password)=>{

        setloading(true);

        const response=await loginUser(email,password)

        setuser(response.user)

        setloading(false)

    }


     const handleRegister=async(email,password)=>{

        setloading(true);

        const response=await registerUser(userData)

        setuser(response.user)

        setloading(false)

    }
     return {
        user, loading, handleLogin, handleRegister
    }

}

