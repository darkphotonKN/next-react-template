import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

import Layout from '../../components/shared/Layout/Layout';
import ContentLayout from '../../components/shared/Layout/ContentLayout';
import PageFullTitle from '../../components/shared/MainContent/PageFullTitle';

import env from '../../config/env.config.js';

class Search extends Component {
  static async getInitialProps(context) {
    const { query } = context;
    const searchValue = query.q;

    // get from backend with search term
    // try {
    //   const uri = `${env.url}/API/SEARCH_EXAMPLE/${searchValue}}`;
    //   const encodedURI = encodeURI(uri);
    //   const response = await fetch(encodedURI);
    //   data = await response.json();
    // } catch (err) {
    //   // log out error if there is one (note: the log will be server-side)
    //   console.log(`Error occured while fetching: ${err}`);
    // }

    // getInitialProps returns an object where the properties are accesible as local props
    return {
      data: searchValue // data.Data
    };
  }

  render() {
    const { data } = this.props;
    return (
      <Layout>
        <ContentLayout
          sectionName={'搜索'}
          imgUrl={'../../static/img/banner/news-banner.png'}
          noSideNav
        >
          <div className="full-section">
            <div className="container-full">
              <PageFullTitle title={'搜索結果'} />
            </div>

            <ul className="list-group">
              <li className="list-group-item">{data}</li>
              <li className="list-group-item">最新消息</li>
              <li className="list-group-item">活動訊息</li>
              <li className="list-group-item">常見問答</li>
              <li className="list-group-item">遊憩資訊</li>
              <li className="list-group-item">園區簡介</li>
              <li className="list-group-item">遊客中心</li>
            </ul>
          </div>
        </ContentLayout>
      </Layout>
    );
  }
}

export default Search;
