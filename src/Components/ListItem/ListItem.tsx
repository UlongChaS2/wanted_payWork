import React from 'react';
import styled from 'styled-components';

export default function ListItem() {
  return (
    <Container>
      <TaskBox>
        <ImfortanceBox>
          <ImfortanceStatus></ImfortanceStatus>
        </ImfortanceBox>
        <Text></Text>
      </TaskBox>
      <Wrap>
        <StatusBox>
          <Status></Status>
        </StatusBox>
        <ModifyButton>
          <EditIcon />
        </ModifyButton>
        <DeleteButton>
          <TrashIcon />
        </DeleteButton>
        <ButtonBox>
          <ConformButton>확인</ConformButton>
          <CancleButton>취소</CancleButton>
        </ButtonBox>
      </Wrap>
    </Container>
  );
}

const Container = styled.div``;

const Wrap = styled.div``;

const TaskBox = styled.div``;

const ImfortanceBox = styled.div``;

const ImfortanceStatus = styled.div``;

const Text = styled.div``;

const StatusBox = styled.div``;

const Status = styled.div``;

const ModifyButton = styled.div``;

const EditIcon = styled.div``;

const DeleteButton = styled.div``;

const TrashIcon = styled.div``;

const ButtonBox = styled.div``;

const ConformButton = styled.div``;

const CancleButton = styled.div``;
