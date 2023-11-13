import axiosServices from './axios.interceptor';

export const register = async (payload, snack) => {
  try {
    const response = await axiosServices.post('/register', payload);
    snack('User registered', { variant: 'success' });
    return response.data;
  } catch (error) {
    snack(error?.response?.data?.error || 'Something maybe wrong', { variant: 'error' });
    console.log('🚀 ~ file: Auth.api.js:7 ~ register ~ error:', error);
    // throw error;
  }
};

export const login = async (payload, snack) => {
  try {
    const response = await axiosServices.post('/auth/login', payload);
    snack('User logged in', { variant: 'success' });
    localStorage.setItem('access_token', response.data.access_token);
    localStorage.setItem('user', JSON.stringify({ username: response.data.username, email: response.data.email, id: response.data.id }));
    window.location.reload();
    return response.data;
  } catch (error) {
    console.log('🚀 ~ file: Auth.api.js:7 ~ register ~ error:', error);
    snack(error?.response?.data?.message || 'Something maybe wrong', { variant: 'error' });
    // throw error;
  }
};

export const getUser = async () => {
  try {
    const response = await axiosServices.get('/register/username');
    return response.data;
  } catch (error) {
    console.log('🚀 ~ file: Auth.api.js:7 ~ register ~ error:', error);
    // throw error;
  }
};

export const logout = async () => {
  try {
    const response = await axiosServices.get('/auth/logout');
    return response.data;
  } catch (error) {
    console.log('🚀 ~ file: Auth.api.js:7 ~ register ~ error:', error);
    // throw error;
  }
};
