import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components/macro';
import 'react-datepicker/dist/react-datepicker.css';

export default function TodoCreate() {
  const [startDate, setStartDate] = useState<Date>(new Date());

  return (
    <Container>
      <TaskInput />
      <DatePickerWrap>
        <DatePickerStyle
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
        />
      </DatePickerWrap>
      <ImportanceSelect />
      <AddButton>추가</AddButton>
    </Container>
  );
}

const Container = styled.div`
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
})`
  flex: 4;
  padding: 8px 0 8px 10px;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
`;

const DatePickerWrap = styled.div`
  flex: 1;
`;

const DatePickerStyle = styled(DatePicker)`
  width: fit-content;
  height: 36px;
  padding-left: 10px;
  margin: 0 10px;
  font-size: 14px;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    color: green;
  }
`;

const ImportanceSelect = styled.select`
  flex: 1;
  height: 36px;
  margin-right: 10px;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
`;

const AddButton = styled.button`
  width: 70px;
  height: 40px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  border-radius: 5px;
  background-color: #28277d;
`;
