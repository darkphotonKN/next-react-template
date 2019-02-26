import React from 'react';

const MoreButton = ({ url }) => {
  return (
    <div className="text-right more-button">
      <a className="btn btn-primary more-btn" href={url}>
        <span className="more-btn-line" />
        <span className="more-btn-txt">查看更多消息 More</span>
        <img src="/static/img/icon/home-more-icon.svg" alt="icon-more" />
      </a>
    </div>
  );
};

export default MoreButton;
