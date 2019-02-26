import React from 'react';
import SocialBar from './SocialBar';

const PageTitle = ({ title, date, onlyTitle }) => {
  // if there's "onlyTitle" prop, render only title
  if (onlyTitle)
    return (
      <div className="page-title">
        <div className="row">
          <div className="col-md-12">
            <h2 className="content-title">{title}</h2>
          </div>
        </div>
      </div>
    );

  return (
    <div className="page-title">
      {/* If date provided render title with date */}
      {date ? (
        <div className="row">
          <div className="col-md-9">
            <h2 className="content-title">{title}</h2>
          </div>
          <div className="col-md-3">
            <h2 className="content-date">{date}</h2>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-12">
            <h2 className="content-title">{title}</h2>
          </div>
        </div>
      )}
      <SocialBar />
    </div>
  );
};

export default PageTitle;
