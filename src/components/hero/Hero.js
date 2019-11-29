import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

const Hero = () => {
  const {
    hero: { bgPortrait, bgLandscape, greeting, name, title, skills },
  } = useStaticQuery(getHero);

  const sources = [
    bgLandscape.fluid,
    {
      ...bgPortrait.fluid,
      media: '(orientation: portrait)',
    },
  ];

  return (
    <section>
      <Background fluid={sources}>
        <TextContainer>
          <p className={'greeting'}>{greeting}</p>
          <h1 className={'full-name'}>{name}</h1>
          <h2 className={'title'}>{title}</h2>
        </TextContainer>
      </Background>
    </section>
  );
};

const getHero = graphql`
  {
    hero: contentfulHero {
      bgPortrait {
        fluid(maxWidth: 1900, quality: 65) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      bgLandscape {
        fluid(maxHeight: 1100, quality: 65) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      greeting
      name
      title
      skills {
        dev
      }
    }
  }
`;

const Background = styled(BackgroundImage)`
  height: 50vmax;
  max-height: 80vmin;
  background-position: right;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  
  @media (orientation: portrait) {
    height: 75vh;
    max-height: 38rem;
  }
`;

const TextContainer = styled.div`
  color: var(--hero-text-color-light);
  position: absolute;
  top: 30%;
  left: 10%;
  margin-right: 39%;
  text-shadow: 3px 2px 3px rgba(0, 0, 0, 0.5);

  .greeting {
    margin: 0 0 4px 0;
    font-size: 4vmin;
    font-style: italic;
  }
  .full-name {
    margin: 0 0 4px 0;
    font-size: 10vmin;
    font-weight: 900;
    text-shadow: 4px 2px 6px rgba(0, 0, 0, 0.6);
  }
  .title {
    font-size: 3vmin;
    font-style: italic;
  }
`;
export default Hero;
