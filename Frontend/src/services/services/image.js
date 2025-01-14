import axios from 'axios';

export const uploadImage = async (file, token) => {
  const formData = new FormData();
  formData.append('image', file);
  return await axios.post('http://localhost:5000/api/images/upload', formData, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
};