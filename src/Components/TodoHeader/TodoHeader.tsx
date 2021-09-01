import React from 'react';
import styled from 'styled-components/macro';

export default function TodoHeader() {
  return (
    <Container>
      <Wrap>
        <Logo>
          <LogoImge src='https://paywork.io/images/logo-dark.png' />
          <p>'s Todo List</p>
        </Logo>
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.flexSet()};
  width: 100%;
  padding: 20px 0;
  background-color: #fff;
  box-shadow: 0px 2px 5px #e4e4e4;
`;

const Wrap = styled.div`
  ${({ theme }) => theme.flexSet('flex-start')};
  width: 700px;
`;

const Logo = styled.div`
  ${({ theme }) => theme.flexSet()};
  font-size: 30px;
  font-weight: 700;
  color: #202040;
`;

const LogoImge = styled.img.attrs({
  alt: `paywork's Todo List Logo`,
})`
  width: 140px;
`;

const SubTitle = styled.div`
  ${({ theme }) => theme.flexSet('', 'flex-end', 'column')};
  margin-left: 10px;
  font-size: 15px;
  font-weight: 500;
  p {
    margin-bottom: 4px;
  }
`;
