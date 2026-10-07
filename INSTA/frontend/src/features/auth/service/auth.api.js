import axios from 'axios';

const api=axios.create({
    baseURL: 'http://localhost:3000/api/auth',
    withCredentials: true,
});

export async function registerUser(userData) {
    try{
        const response = await api.post('/register', userData);
        return response.data;   
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
}

export async function loginUser(email, password) {
    try{
        const response = await api.post('/login', { email, password });
        return response.data;       
    } catch (error) {
        console.error('Error logging in user:', error);
        throw error;
    }
}