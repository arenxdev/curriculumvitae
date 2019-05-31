import React from 'react';
import styled, { ThemeProvider } from 'styled-components';


const SocialStyle = styled.div`
  margin: 0;
  display: block;
`;
const SocialUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;
const SocialLi = styled.li`
  display: inline;
  margin: 0 1em 0 0;
  padding: 0 0 0 0;
`;
const SocialAnchor = styled.a`
  background: ${props => props.theme.background};
  color: #000;
  text-decoration: none;
  font-size: 1.2em;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  line-height: 35px;
  display: inline-block;
`;
const SocialIcon = styled.i`
  color: #fff;
`;

const socialStyle = {
  facebook: { style: {background: '#3b5998' }, class: 'fab fa-facebook-f'},
  twitter: { style: {background: '#38a1f3' }, class: 'fab fa-twitter'},
  linkedin: { style: {background: '#0e76a8' }, class: 'fab fa-linkedin-in'},
  github: { style: {background: '#333' }, class: 'fab fa-github-alt'},
  default: { style: {background: '#000' }, class: 'fas fa-user'},
}
const getColor = name => socialStyle[name]?socialStyle[name].style:socialStyle.default.style;
const getClass = name => socialStyle[name]?socialStyle[name].class:socialStyle.default.class;

const Social = props => (
  <SocialStyle>
    {props.social &&
      <SocialUl>
        {props.social.map((item, index) => (
          <SocialLi key={`social-${index}`}>
            <ThemeProvider theme={getColor(item.name)}>
              <SocialAnchor href={item.url} target="_blank">
                  <SocialIcon className={getClass(item.name)} />
              </SocialAnchor>
            </ThemeProvider>
          </SocialLi>
        ))}
      </SocialUl>
    }
  </SocialStyle>
);

export default Social;