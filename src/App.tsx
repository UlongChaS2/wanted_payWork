import React from 'react';
import TodoHeader from 'Components/TodoHeader/TodoHeader';
import TodoBody from 'Components/TodoBody/TodoBody';
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
