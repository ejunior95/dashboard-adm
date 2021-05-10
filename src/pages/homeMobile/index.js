import React from 'react';
import Container from '@/pages/homeMobile/styles';
import HeaderMobile from '@/components/headerMobile';
import ContainerCorpoMobile from '@/components/containerCorpoMobile';
// import Footer from '../../components/footer/index';
// import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container>
      <HeaderMobile />
      <ContainerCorpoMobile />
    </Container>
  );
}

export default Home;
