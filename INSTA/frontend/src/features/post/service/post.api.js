import axios from "axios";
import React from "react";

const api=axios.create({
    baseURL: 'http://localhost:3000/api/post',
    withCredentials: true,
});
export async function getFeed(){
try{    const response = await api.get('/getfeed')
    return response.data;  }
   catch (error) {
        console.error('Error post :', error);
        throw error;
    }

}

