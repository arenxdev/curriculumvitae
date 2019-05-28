import React from 'react';

const Certificates = props => (
  <div className="certificates">
    <div className="certificates-container">
      {props.data.map((cert, index) => (
            <div className="certificates-item" key={`certificate-${index}`}>
              <h3>{cert.name} @ {cert.institution}
                <span>{cert.date}</span>
              </h3>
              <p>{cert.description}</p>
            </div>
          )
        )}
    </div>
  </div>
);

export default Certificates;