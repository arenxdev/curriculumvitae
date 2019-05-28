import React from 'react';

const Experience = props => (
  <div className="experience">
    <div className="experience-container">
      {props.data.map((exp, index) => (
            <div className="experience-item" key={`experience-${index}`}>
              <h3>{exp.jobTitle} @ {exp.company}
                <span>{exp.startDate} - {exp.endDate}</span>
              </h3>
              <p>{exp.jobDescription}</p>
            </div>
          )
        )}
    </div>
  </div>
);

export default Experience;