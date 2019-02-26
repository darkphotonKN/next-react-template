import React from 'react';
import SectionLabel from './SectionLabel';

const Banner = (props) => {
  const bannerBg = props.bannerImg
    ? props.bannerImg
    : '/static/img/banner/placeholder.png';

  return (
    <div
      className="content-banner"
      style={{
        backgroundImage: `url('${bannerBg}')`,
        backgroundSize: 'cover'
      }}
    >
      <SectionLabel sectionName={props.sectionName} />
    </div>
  );
};

export default Banner;
