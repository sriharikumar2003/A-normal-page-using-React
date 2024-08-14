import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';

const First = () => {
  return (
    <>
      <Header />
      <Form />
      <Footer />
    </>
  );
}




const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<First />);
