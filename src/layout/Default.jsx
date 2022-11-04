import { Container } from '@chakra-ui/react';
import React from 'react';
import Footer from '../components/Footer';

const Default = ({ children }) => {
  return (
    <Container className="cc-container">
      {children}
      <Footer />
    </Container>
  );
};

export default Default;
