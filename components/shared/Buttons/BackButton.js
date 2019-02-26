import React from 'react';
// use nextjs router for back functionality
import Router from 'next/router';

const BackButton = () => {
  return (
    <div className="back-button-wrap" onClick={() => Router.back()}>
      <button className="back-button">返回</button>
      <img src="/static/img/icon/return.svg" alt="back-btn" />
    </div>
  );
};

export default BackButton;
