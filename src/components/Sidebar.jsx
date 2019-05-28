import React from 'react';

const Sidebar = ({children }) => (
  <div className="sidebar">
    <div className="sidebar-container">
      {children}
    </div>
  </div>
);

export default Sidebar;