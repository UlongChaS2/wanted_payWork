import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import { tasks } from 'types';
import { addTask } from 'store/actions/serviceTasks';
import styled from 'styled-components/macro';

export default function TodoCreate() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<string>('');
  const taskList = useSelector<RootState, tasks>((state) => state.serviceTasks);

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const submitTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newId =
      Math.max(0, ...taskList.list.map((todo) => Number(todo.id))) + 1;

    if (!inputValue) return;
    dispatch(addTask(inputValue, newId.toString()));
    setInputValue('');
  };

  return (
    <Container onSubmit={(e) => submitTask(e)}>
      <TaskInput value={inputValue} onChange={(e) => handleInputValue(e)} />
      <AddButton type='submit'>추가</AddButton>
    </Container>
  );
}

const Container = styled.form`
  ${({ theme }) => theme.flexSet()};
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 2px 5px #e4e4e4;
`;

const TaskInput = styled.input.attrs({
  type: 'text',
  placeholder: '계획한 목표를 적어주세요 📝🤙',
})`
  flex: 3;
  padding: 10px 0 8px 10px;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
`;

const AddButton = styled.button`
  flex: 1;
  width: 70px;
  height: 40px;
  margin-left: 10px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  border-radius: 5px;
  background-color: #28277d;
`;
