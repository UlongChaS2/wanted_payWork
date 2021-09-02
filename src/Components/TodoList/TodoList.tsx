import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store/reducers';
import { loadTasks } from 'store/actions/serviceTasks';
import { tasks } from 'types';
import TodoItem from 'components/TodoItem';
import styled from 'styled-components';

export default function TodoList() {
  const taskList = useSelector<RootState, tasks>((state) => state.serviceTasks);
  const dispatch = useDispatch();
  const handleLoadRequest = useCallback(
    () => dispatch(loadTasks()),
    [dispatch]
  );

  useEffect(() => {
    handleLoadRequest();
  }, [handleLoadRequest]);
  // console.log(taskList);
  return (
    <Container>
      <Wrap>
        {taskList.list.map((task) => (
          <TodoItem task={task} />
        ))}
      </Wrap>
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

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;
