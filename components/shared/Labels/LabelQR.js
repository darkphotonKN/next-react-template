import React from 'react';

// default label prop will be set to 'label'
const Label = ({ title, size, label = 'label-solo' }) => {
  return (
    <div
      id={label}
      className={size === 'small' ? 'label-qr small active' : 'label-qr active'}
    >
      <div className="label-wrap">
        <img src="/static/img/image/home-label.svg" alt="home-label" />
        <div className="label-txt">{title}</div>
      </div>
    </div>
  );
};

export default Label;
