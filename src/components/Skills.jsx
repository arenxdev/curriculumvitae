import React from 'react';

const Skills = props => (
  <div className="skills">
    <div className="skills-container">
      {props.data.map((skill, index) => (
        <div className="skills-item" key={`skill-${index}`}>
          <h5>{skill.name}</h5>
          <div className="skills-line">
            <span>{skill.percentage}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;