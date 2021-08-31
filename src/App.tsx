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
  ${({ theme }) => theme.flexSet('', '', 'column')};
  width: 100%;
  height: 100vh;
  background-color: #f5f5f7;
`;

const Wrap = styled.div`
  width: 900px;
`;
