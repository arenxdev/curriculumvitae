import React from 'react';

const Education = props => (
  <div className="education">
    <div className="education-container">
      {props.data.map((edu, index) => (
          <div className="education-item" key={`education-${index}`}>
            <h3>{edu.degree} {edu.institution}
              <span>{edu.startDate} - {edu.endDate}</span>
            </h3>
            <p>{edu.description}</p>
          </div>
        )
      )}
    </div>
  </div>
);

export default Education;