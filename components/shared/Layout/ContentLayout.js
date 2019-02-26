import React from 'react';
import Head from 'next/head';

import Banner from '../Banner/Banner';
import SubNav from '../Nav/SubNav';

import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import PrimaryNav from '../Nav/PrimaryNav';

const ContentLayout = (props) => {
  // give noSideNav ={true} to this component as prop to hide side nav
  const { sectionName, imgUrl, bcLinks, subNavList, noSideNav } = props;

  return (
    <React.Fragment>
      <Head>
        {/* bcLinks props automatically added to title here for accessibility */}
        <title>
          壽山國家自然公園籌備處
          {bcLinks
            ? bcLinks.map((link) => ` > ${link.name}`).join('') // remove the unwanted comma with .join('')
            : null}
        </title>
      </Head>

      {/* Shared Banner */}
      <PrimaryNav />
      <Banner sectionName={sectionName} bannerImg={imgUrl} />
      <Breadcrumbs bcLinks={bcLinks} />
      <div className="container">
        {noSideNav ? (
          <div className="row mb-5">
            <div className="col-md-12 mt-3">
              {/* Main Content Injected Here */}
              <div className="main-content">{props.children}</div>
            </div>
          </div>
        ) : (
          <div className="row mb-5">
            <div className="col-md-3 mt-3">
              {/* Side Navbar on Content Pages */}
              <SubNav subNavList={subNavList} />
            </div>
            <div className="col-md-9 mt-3">
              {/* Main Content Injected Here */}
              <div className="main-content">{props.children}</div>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default ContentLayout;
