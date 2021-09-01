import React from 'react';
import EditIcon from 'assets/icon/EditIcon';
import TrashIcon from 'assets/icon/TrashIcon';
import styled from 'styled-components/macro';
import { task } from 'types';

interface TodoItemProps {
  task: task;
}

const TodoItem: React.FC<TodoItemProps> = ({ task }) => {
  return (
    <Container>
      <Text>{task.content}</Text>
      <ButtonBox>
        <ModifyButton>
          <EditIcon />
        </ModifyButton>
        <DeleteButton>
          <TrashIcon />
        </DeleteButton>
      </ButtonBox>
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
  padding: 10px;
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

const ButtonBox = styled.div``;

const ModifyButton = styled.button`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  fill: rgb(183 183 183);

  &:hover {
    fill: rgb(40 40 40);
  }
`;

const DeleteButton = styled.button`
  width: 20px;
  height: 20px;
  fill: rgb(183 183 183);

  &:hover {
    fill: rgb(230 32 32);
  }
`;
