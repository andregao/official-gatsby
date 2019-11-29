import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedinIn, FaRegFilePdf } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import Link from './Link';

const Links = () => {
  return (
    <IconContext.Provider
      value={{ size: '1.5rem', color: 'var(--icon-color-on-light)' }}
    >
      <Container>
        <Link text={'GitHub'} icon={<FaGithub />} link={'//github.com/andregao'} />
        <Link text={'LinkedIn'} icon={<FaLinkedinIn />} link={'//linkedin.com/in/andregao/'} />
        <Link text={'Resume'} icon={<FaRegFilePdf />} link={'/resume-andregao-2019.pdf'} />
      </Container>
    </IconContext.Provider>
  );
};

const Container = styled.article`
  padding: 1.5rem 30%;
  display: flex;
  justify-content: space-evenly;
  & > *:not(:last-child) {
    margin-right: 1rem;
  }
`;

export default Links;
