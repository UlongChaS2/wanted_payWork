import React from 'react';
import From from 'Components/Form/From';
import styled from 'styled-components';

export default function App() {
  return (
    <Container>
      <Wrap>
        <From />
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
