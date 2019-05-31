import React from 'react';
import H2Styled from '../styled/H2styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Certificates = props => (
  <div className="certificates">
    <H2Styled name="Certificates" />
    <div className="certificates-container">
      {props.data.map((cert, index) => (
            <div className="certificates-item" key={`certificate-${index}`}>
              <H3Styled>{cert.name} @ {cert.institution}
                <span>{cert.date}</span>
              </H3Styled>
              <PStyled>{cert.description}</PStyled>
            </div>
          )
        )}
    </div>
  </div>
);

export default Certificates;