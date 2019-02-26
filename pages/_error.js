import React from 'react';
import Layout from '../components/shared/Layout/Layout';
import ContentLayout from '../components/shared/Layout/ContentLayout';
import PageTitle from '../components/shared/MainContent/PageTitle';
import BackButton from '../components/shared/Buttons/BackButton';

const Error = () => {
  return (
    <Layout>
      <ContentLayout
        sectionName={'404 Error'}
        imgUrl={'/static/img/banner/404-error.jpg'}
        noSideNav={true}
      >
        <div className="row">
          <div className="col-md-12">
            <PageTitle title={'本頁面不存在'} onlyTitle={true} />
          </div>
        </div>

        <section className="error-container">
          <span>4</span>
          <span>
            <span className="screen-reader-text">0</span>
          </span>
          <span>4</span>
          <p className="error-title">Page Not Found</p>
        </section>

        <BackButton />
      </ContentLayout>
    </Layout>
  );
};

export default Error;
