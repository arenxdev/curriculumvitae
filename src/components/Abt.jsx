import React from 'react';
import Social from './Social';
import styled from 'styled-components';

const AboutStyle = styled.div`
  text-align: center;
`;
const AboutAvatar = styled.div`
  padding: 2em 0 0 0;
`;
const AboutImg = styled.img`
  border-radius: 50%;
  width: 160px;
  height: 160px;
  padding: 2px;
  margin:0 auto;
  display: block;
  box-shadow: 0 0 3px rgba(0,0,0,.6);
`;
const AboutName = styled.div`
  text-align: center;
`;
const AboutH2 = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  letter-spacing: 1.2px;
  color: #343a40;
  `;
const AboutProffession = styled.p`
  margin: .2em 0 1em 0;
  letter-spacing: 1.6px;
  font-weight: 300;
  color: #343a40;
`;
const AboutBio = styled.p`
  color: #757575;
  font-size: 1em;
  font-weight: 300;
`;
const AboutLocation = styled.p`
  color: #757575;
  font-size: 1em;
  font-weight: 400;
`;

const About = ({ avatar, name, profession, bio, address, social }) => (
  <AboutStyle>
    <div className="about-container">
      <AboutAvatar>
        <figure>
          <AboutImg src={avatar} alt={name} />
        </figure>
        <AboutName>
          <AboutH2>{name}</AboutH2>
        </AboutName>
        <div className="about-profession">
          <AboutProffession>{profession}</AboutProffession>
        </div>
        <div className="about-desc">
          <AboutBio>{bio}</AboutBio>
        </div>
        <div className="about-location">
          <AboutLocation>{address}</AboutLocation>
        </div>
        <div className="about-social">
          <Social social={social} />
        </div>
      </AboutAvatar>
    </div>
  </AboutStyle>
);

export default About;