// src/App.jsx
import React from 'react';
import { Layout } from 'antd';
import HeaderComponent from './components/Header';
import Hero from './components/Hero';
import './App.css';

const { Content, Footer } = Layout;

function App() {
  return (
    //add hello world here
    
    <Layout>
      <HeaderComponent />
      <Content>
        <Hero />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        VectorShift AI © 2023
      </Footer>
    </Layout>
  );
}

export default App;