import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return (
    <Container>
      <Wrap>
        <div>
          <Logo />
          <SubTitle />
        </div>
        <DateWrap>
          <div>
            <Date></Date>
            <Clock></Clock>
          </div>
          <Weather></Weather>
        </DateWrap>
      </Wrap>
    </Container>
  );
}

const Container = styled.div``;

const Wrap = styled.div``;

const Logo = styled.div``;

const SubTitle = styled.div``;

const DateWrap = styled.div``;

const Date = styled.div``;

const Clock = styled.div``;

const Weather = styled.div``;
