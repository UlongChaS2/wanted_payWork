import React from 'react';
import TodoHeader from 'components/TodoHeader';
import TodoBody from 'components/TodoBody';
import styled from 'styled-components';

const App: React.FC = () => {
  return (
    <Container>
      <TodoHeader />
      <TodoBody />
    </Container>
  );
};

export default App;

const Container = styled.div`
  ${({ theme }) => theme.flexSet('', '', 'column')};
  width: 100%;
  height: 100vh;
  background-color: #f5f5f7;
`;
