import React from 'react';
import './Tooltip.css'; // You can create a separate CSS file for styling the Tooltip component

const Tooltip = ({ position, children }) => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="tooltip-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {showTooltip && (
        <div className={`tooltip tooltip-${position}`}>
          Thanks for hovering me!I'm a tooltip
        </div>
      )}
      {children}
    </div>
  );
};

export default Tooltip;
