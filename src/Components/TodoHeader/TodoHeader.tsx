import React from 'react';
import styled from 'styled-components/macro';

export default function TodoHeader() {
  return (
    <Container>
      <Wrap>
        <LogoBox>
          <Logo>
            <LogoImge />
            <p>paywork's</p>
            <p>Todo List</p>
          </Logo>
          <SubTitle>
            <p>작업은 정확히 💼</p>
            <p>목표는 칼같이 🤙</p>
          </SubTitle>
        </LogoBox>
        <DateWrap>
          <div>
            <Date>2010.08.31</Date>
            <Clock>09:12 PM</Clock>
          </div>
          <Weather>☃️</Weather>
        </DateWrap>
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.flexSet()};
  width: 100%;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0px 2px 5px #e4e4e4;
`;

const Wrap = styled.div`
  ${({ theme }) => theme.flexSet('space-between')};
  width: 900px;
`;

const LogoBox = styled.div`
  ${({ theme }) => theme.flexSet('', 'flex-end')};
`;

const Logo = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: #242428;
`;

const LogoImge = styled.img.attrs({
  alt: `paywork's Todo List Logo`,
})`
  display: none;
`;

const SubTitle = styled.div`
  ${({ theme }) => theme.flexSet('', 'flex-end', 'column')};
  margin-left: 10px;
  font-size: 14px;
  p {
    margin-bottom: 4px;
  }
`;

const DateWrap = styled.div`
  ${({ theme }) => theme.flexSet()}
`;

const Date = styled.div``;

const Clock = styled.div``;

const Weather = styled.div`
  font-size: 30px;
  margin-left: 10px;
`;
