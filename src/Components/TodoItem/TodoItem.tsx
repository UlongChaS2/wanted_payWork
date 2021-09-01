import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { task } from 'types';
import { removeTask, editTask } from 'store/actions/serviceTasks';
import ModifyIcon from 'assets/icon/ModifyIcon';
import TrashIcon from 'assets/icon/TrashIcon';
import styled from 'styled-components/macro';

interface TodoItemProps {
  task: task;
}

const TodoItem: React.FC<TodoItemProps> = ({ task }) => {
  const [isModify, setIsModify] = useState<boolean>(false);
  const [newInputValue, setNewInputValue] = useState<string>('');
  const dispatch = useDispatch();

  const handleRemoveTask = (id: string) => {
    dispatch(removeTask(id));
  };

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewInputValue(e.target.value);
  };

  const handleModiyButton = () => {
    setNewInputValue(task.content);
    setIsModify(true);
  };

  const handelEdit = (content: string, id: string) => {
    dispatch(editTask(content, id));
    setNewInputValue(task.content);
    setIsModify(false);
  };

  return (
    <Container>
      {isModify ? (
        <TextInput
          isModify={isModify}
          value={newInputValue}
          onChange={(e) => handleInputValue(e)}
        />
      ) : (
        <Text>{task.content}</Text>
      )}
      {isModify ? (
        <ButtonBox>
          <ConformButton onClick={() => handelEdit(newInputValue, task.id)}>
            확인
          </ConformButton>
          <CancleButton onClick={() => setIsModify(false)}>취소</CancleButton>
        </ButtonBox>
      ) : (
        <ButtonBox>
          <ModifyButton onClick={handleModiyButton}>
            <ModifyIcon />
          </ModifyButton>
          <DeleteButton onClick={() => handleRemoveTask(task.id)}>
            <TrashIcon />
          </DeleteButton>
        </ButtonBox>
      )}
    </Container>
  );
};

export default TodoItem;
/* min-height: ${({ isModify }) => (isModify ? '110px' : '70px')}; */

const Container = styled.div`
  ${({ theme }) => theme.flexSet('space-between')};
  width: 100%;
  height: 65px;
  margin: 10px 0;
  padding: 10px 20px;
  background-color: white;
  border-radius: 5px;
  cursor: default;
  transition: 0.3s;
`;

const Text = styled.div`
  flex: 1;
  font-size: 16px;
  font-weight: 500;
  overflow: hidden;
`;

const TextInput = styled.input.attrs({
  type: 'text',
})<{ isModify: boolean }>`
  flex: 1;
  font-size: 16px;
  font-weight: 500;
  padding-left: 5px;
  box-shadow: 0 1px 2px 1px #0000001f;
  height: 30px;
  border-radius: 5px;
`;

const ButtonBox = styled.div`
  display: flex;
  margin-left: 20px;
`;

const ModifyButton = styled.button`
  width: 22px;
  height: 22px;
  margin-right: 10px;
  fill: rgb(183 183 183);

  &:hover {
    fill: rgb(40 40 40);
  }
`;

const DeleteButton = styled.button`
  width: 22px;
  height: 22px;
  fill: rgb(183 183 183);

  &:hover {
    fill: rgb(230 32 32);
  }
`;

const ConformButton = styled.button`
  ${({ theme }) => theme.flexSet()};
  height: 38px;
  width: 70px;
  border-radius: 5px;
  padding: 10px;
  color: white;
  background-color: #28277d;
  box-shadow: 0px 2px 5px 1px #909090;
`;

const CancleButton = styled(ConformButton)`
  margin-left: 6px;
  background-color: #4b4eb7;
`;
