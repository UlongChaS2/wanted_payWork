import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/reducers';
import { tasks } from 'types';
import TodoItem from 'components/TodoItem';
import styled from 'styled-components';

export default function TodoList() {
  const dispatch = useDispatch();

  const taskList = useSelector<RootState, tasks>((state) => state.serviceTasks);
  return (
    <Container>
      {taskList.list.map((task) => (
        <TodoItem task={task} />
      ))}
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
