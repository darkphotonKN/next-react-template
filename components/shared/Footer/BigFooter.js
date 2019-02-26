import React from 'react';

import FooterList from './FooterList';

const BigFooter = () => {
  // giving no url means it will render as a list header
  const links1 = [];
  const links2 = [];
  const links3 = [];
  const links4 = [];
  const links5 = [];
  const links6 = [];
  const links7 = [];
  return (
    <div className="container big-footer d-none d-sm-none d-md-block">
      <div className="row big-footer-bar">
        <FooterList links={links1} />
        <FooterList links={links2} />
        <FooterList links={links3} />
        <FooterList links={links4} />
        <FooterList links={links5} />
        <FooterList links={links6} />
        <FooterList links={links7} />
      </div>
    </div>
  );
};

export default BigFooter;
