import React from 'react';
import Header from 'Components/Header/Header';
import BodyList from 'Components/BodyList/BodyList';
import styled from 'styled-components';

export default function App() {
  return (
    <Container>
      <Header />
      <Wrap>
        <BodyList />
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.flexSet()};
  width: 100%;
`;

const Wrap = styled.div`
  width: 900px;
`;
