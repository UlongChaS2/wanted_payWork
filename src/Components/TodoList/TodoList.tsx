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
    // handleLoadRequest();
  }, [handleLoadRequest]);
  return (
    <Container>
      <Wrap>
        {taskList.list.length === 0 ? (
          <NoneTask>
            <Text>계획을 추가해주세요</Text>
          </NoneTask>
        ) : (
          taskList.list.map((task) => <TodoItem task={task} />)
        )}
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 530px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 5px 1px #909090;
  background-color: #4b4eb7;
`;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

const NoneTask = styled.div`
  ${({ theme }) => theme.flexSet()};
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: #fff;
`;

const Text = styled.div`
  font-size: 28px;
  font-weight: 500;
  color: #202040;
  padding: 8px 10px;
  box-shadow: 0px 5px 5px 2px #b5b2b2;
  border-radius: 5px;
  border: 1px solid #e4e4e4;
`;
