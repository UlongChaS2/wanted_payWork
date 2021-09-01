import React from 'react';
import TodoItem from 'components/TodoItem/TodoItem';
import styled from 'styled-components';

export default function TodoList() {
  return (
    <Container>
      <TodoItem />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 530px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px 1px #909090;
  background-color: #4b4eb7;
`;
