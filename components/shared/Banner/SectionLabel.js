import React from 'react';

const SectionLabel = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-label">{props.sectionName}</div>
        </div>
      </div>
    </div>
  );
};

export default SectionLabel;
