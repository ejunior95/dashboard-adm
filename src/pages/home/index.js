import React from 'react';
import Container from '@/pages/home/styles';
import Header from '@/components/header/index';
import ContainerCorpo from '@/components/containerCorpo/index';
import Footer from '@/components/footer/index';
// import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container>
      <Header />
      <ContainerCorpo />
      <Footer />
    </Container>
  );
}

export default Home;
