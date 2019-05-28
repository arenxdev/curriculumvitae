import React from 'react';

const Main = ({children }) => (
  <div className="main">
    <div className="main-container">
      {children}
    </div>
  </div>
);

export default Main;