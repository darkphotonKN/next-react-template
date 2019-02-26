import React from 'react';
import Layout from '../components/shared/Layout/Layout';
import ContentLayout from '../components/shared/Layout/ContentLayout';
import PageTitle from '../components/shared/MainContent/PageTitle';

const Error = () => {
  return (
    <Layout>
      <ContentLayout
        sectionName={'網站導覽'}
        imgUrl={'/static/img/banner/sitemap.jpg'}
        noSideNav={true}
      >
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-12">
              <PageTitle title={'網站導覽'} onlyTitle={true} />
            </div>
          </div>
        </div>
      </ContentLayout>
    </Layout>
  );
};

export default Error;
