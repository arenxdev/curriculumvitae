import React from 'react';
import H2Styled from '../styled/H2styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Education = props => (
  <div className="education">
    <H2Styled name="Education" />
    <div className="education-container">
      {props.data.map((edu, index) => (
          <div className="education-item" key={`education-${index}`}>
            <H3Styled>{edu.degree} @ {edu.institution}
              <span>{edu.startDate} - {edu.endDate}</span>
            </H3Styled>
            <PStyled>{edu.description}</PStyled>
          </div>
        )
      )}
    </div>
  </div>
);

export default Education;