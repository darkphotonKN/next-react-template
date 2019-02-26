import React from 'react';

// default label prop will be set to 'label'
const Label = ({ title, size, small, label = 'label-solo', centered }) => {
  return (
    <div
      id={centered ? 'label-solo-centered' : label}
      className={small ? 'label-txt small-box' : 'label-txt'}
    >
      <div className="label-wrap">
        <img
          src="/static/img/image/home-label.svg"
          alt="home-label"
          className={small ? 'small-box' : ''}
        />
        <div className={small ? 'label-txt small-box' : 'label-txt'}>
          {title}
        </div>
      </div>
    </div>
  );
};

export default Label;
