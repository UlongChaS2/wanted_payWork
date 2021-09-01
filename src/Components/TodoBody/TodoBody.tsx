import React from 'react';
import TodoCreate from 'components/TodoCreate';
import TodoList from 'components/TodoList';
import styled from 'styled-components';

export default function TodoBody() {
  return (
    <Container>
      <Wrap>
        <TodoCreate />
        <TodoList />
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.flexSet()};
  padding: 40px 0;
`;

const Wrap = styled.div`
  width: 700px;
`;
