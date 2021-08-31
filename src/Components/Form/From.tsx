import React from 'react';
import Header from 'Components/Header/Header';
import BodyList from 'Components/Header/Header';
import styled from 'styled-components';

const From = () => {
  return (
    <Container>
      <Header />
      <BodyList />
    </Container>
  );
};

export default From;

const Container = styled.div``;
