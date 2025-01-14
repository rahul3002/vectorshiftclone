// src/components/ImageUpload.jsx
import React from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { Button } from 'antd';

const ImageUpload = () => {
  const [file, setFile] = React.useState(null);

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const uploadImage = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('image', file);
      try {
        const response = await axios.post('http://localhost:5000/api/images/upload', formData, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <div {...useDropzone({ onDrop })}>
        <p>Drag and drop an image here, or click to select one</p>
      </div>
      {file && <p>Selected file: {file.name}</p>}
      <Button type="primary" onClick={uploadImage} disabled={!file}>
        Upload
      </Button>
    </div>
  );
};

export default ImageUpload;
