import React from 'react';
import H2Styled from '../styled/H2styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Experience = props => (
  <div className="experience">
    <H2Styled name="Experience" />
    <div className="experience-container">
      {props.data.map((exp, index) => (
            <div className="experience-item" key={`experience-${index}`}>
              <H3Styled>{exp.jobTitle} @ {exp.company}
                <span>{exp.startDate} - {exp.endDate}</span>
              </H3Styled>
              <PStyled>{exp.jobDescription}</PStyled>
            </div>
          )
        )}
    </div>
  </div>
);

export default Experience;