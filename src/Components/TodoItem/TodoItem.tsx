import React from 'react';
import EditIcon from 'assets/icon/EditIcon';
import TrashIcon from 'assets/icon/TrashIcon';
import styled from 'styled-components/macro';

export default function TodoItem() {
  return (
    <Container>
      <TaskBox>
        <ImfortanceBox>
          <ImfortanceStatus>🔴</ImfortanceStatus>
        </ImfortanceBox>
        <Text>Task1</Text>
      </TaskBox>
      <Wrap>
        <StatusBox>
          <Status>ongoing</Status>
        </StatusBox>
        <ButtonBox>
          <ModifyButton>
            <EditIcon />
          </ModifyButton>
          <DeleteButton>
            <TrashIcon />
          </DeleteButton>
        </ButtonBox>
      </Wrap>
    </Container>
  );
}
/* min-height: ${({ isModify }) => (isModify ? '110px' : '70px')}; */

const Container = styled.div`
  ${({ theme }) => theme.flexSet('space-between', '', 'column')};
  width: 100%;
  height: 65px;
  margin: 10px 0;
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  cursor: default;
  transition: 0.3s;
`;

const ImfortanceStatus = styled.div`
  margin: 2px 6px 0 0;
`;

const TaskBox = styled.div`
  ${({ theme }) => theme.flexSet('flex-start')};
  height: 100%;
`;

const Text = styled.div`
  flex: 1;
  font-size: 16px;
  font-weight: 500;
  overflow: hidden;
`;

const ImfortanceBox = styled.div`
  ${({ theme }) => theme.flexSet('flex-start')};
`;

const Wrap = styled.div`
  ${({ theme }) => theme.flexSet('space-between')};
  margin-top: 6px;
`;

const StatusBox = styled.div`
  ${({ theme }) => theme.flexSet('flex-start')};
`;

const Status = styled.div`
  ${({ theme }) => theme.flexSet()};
  max-width: 80px;
  padding: 2px 4px 4px;
  margin-right: 6px;
  border-radius: 3px;
  color: rgb(18 110 130);
  border: 1px solid rgb(18 110 130);
  transition: 0.2s;
  opacity: 0.7;
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
