import React, { useState } from 'react';
import './ToogleSwitch.scss';

const ToggleSwitch = ({ userCmt, checkAllUser, isAllChecked}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);

    if (checkAllUser) {
      checkAllUser();
    }
  };

  React.useEffect(() => {
    setIsChecked(isAllChecked);
  }, [isAllChecked]);


  return (
    <div className="toggle-switch">
      <label className="switch">
        <input type="checkbox" checked={isChecked} onChange={handleToggle}/>
        <span className="slider"></span>
      </label>
      <span className="label-text">{userCmt}</span>
    </div>
  );
};

export default ToggleSwitch;