import React from 'react';
import styled from 'styled-components';

const Link = ({ text, icon, link }) => {
  return (
    <Container href={link} target="_blank">
      {icon}
      <LinkText>{text}</LinkText>
    </Container>
  );
};

const Container = styled.a`
  display: flex;
  align-items: flex-end;
`;

const LinkText = styled.p`
  margin-left: 0.3rem;
  font-size: .7rem;
`;

export default Link;
