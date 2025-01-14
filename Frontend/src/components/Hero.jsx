// src/components/Hero.jsx
import React from 'react';
import { Row, Col, Button, Typography } from 'antd';
import ImageUpload from './ImageUpload';

const { Title, Text } = Typography;

const Hero = () => {
  return (
    
    
    
    
    
    
    
    
    
    
    
    <Row justify="center" align="middle" style={{ padding: '50px' }}>
      <Col xs={24} md={12}>
        <Title level={2}>VectorShift AI</Title>
        <Text style={{ color: '#666', marginTop: '16px' }}>
          Convert your images to vector graphics effortlessly.
        </Text>
        <ImageUpload />
      </Col>
    </Row>
  );
};

export default Hero;