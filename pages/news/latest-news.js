import React, { Component } from 'react';
import Link from 'next/link';

import Layout from '../../components/shared/Layout/Layout';
import ContentLayout from '../../components/shared/Layout/ContentLayout';

import NewsPagination from '../../components/shared/MainContent/NewsPagination';

import env from '../../config/env.config.js';

// import for server-side http-requests
import fetch from 'isomorphic-fetch';

class LatestNews extends Component {
  // default argument context in getInitialProps
  static async getInitialProps(context) {
    // context has a property 'query' which reads the query params on the url
    // there is also pathname ('/news/latest-news'), path (also same), and more properties
    const { query } = context;

    const page = Number(query.page) || 1; // default page 1 when no query param of 'page'
    const itemsPerPage = 1; // items per page to show

    let data = []; // initial data is empty

    try {
      // encode the API URI endpoint to encode the chinese characters
      const uri = `${
        env.url
      }/API/GetData.ashx?IT=最新消息&Type=list&NowPageNo=${page}&CutPage=${itemsPerPage}`;
      const encodedURI = encodeURI(uri);
      const response = await fetch(encodedURI, {
        method: 'GET',
        mode: 'cors',
        credentials: 'same-origin'
      });
      data = await response.json();
    } catch (err) {
      // log out error if there is one (note: the log will be server-side)
      console.log(`Error occured while fetching: ${err}`);
    }

    // getting length of array
    // const uri = `${env.url}/API/GetData.ashx?IT=最新消息&Type=list`;

    // const users = await fetch('https://jsonplaceholder.typicode.com/users');
    // const usersData = await users.json();

    // returning these values as local props for this component
    return {
      totalItems: data.MaxDataCt,
      itemsPerPage: itemsPerPage,
      newsData: data.Data,
      page: page
      //usersData
    };
  }

  render() {
    console.log(this.props.newsData);

    const bcLinks = [
      { path: '/news/latest-news', name: '壽山新訊' },
      {
        name: '最新消息'
      }
    ];

    /* Sidenav */
    const subNavList = [
      { name: '最新消息', path: '/news/latest-news', active: true },
      { name: '活動訊息', path: '/news/event' },
      { name: '環境教育公告', path: '/news/environmental-education' },
      { name: '常見問答', path: '/news/faq' }
    ];

    // Tests
    // console.log(this.props.newsData);
    // console.log(this.props.totalItems);
    return (
      <Layout>
        <ContentLayout
          sectionName={'壽山新訊'}
          imgUrl={'../../static/img/banner/news-banner.png'}
          bcLinks={bcLinks}
          subNavList={subNavList}
        >
          <div className="latest-news">
            {this.props.newsData ? (
              this.props.newsData.map((newsEntry) => (
                <div key={newsEntry.ID} className="row news-section">
                  <div className="col-md-1 col-4">
                    <div className="date">
                      <div className="text-left year">
                        {newsEntry.Date.slice(0, 4)}
                      </div>
                      <div className="text-right month">
                        {newsEntry.Date.slice(5, newsEntry.Date.length)}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2 col-6 text-center">
                    <img
                      src="../static/img/icon/news.svg"
                      className="news-icon"
                      alt="news-icon"
                      className="mt-2"
                    />
                    <h2 className="title">{newsEntry.Category}</h2>
                  </div>
                  <div className="col-md-9 col-12">
                    <Link href={`/news/detail?id=${newsEntry.ID}`}>
                      <a>
                        <p className="content">{newsEntry.Title}</p>
                      </a>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div>Loading...</div>
            )}
            {/* <div className="container">
              <div className="row">
                <div className="col-12 text-center">
                  <h3 className="text-white">Users:</h3>
                  <ul className="list-group">
                    {this.props.usersData
                      ? this.props.usersData.map((user) => (
                          <li className="list-group-item">{user.name}</li>
                        ))
                      : null}
                  </ul>
                </div>
              </div>
            </div> */}
            <NewsPagination
              url={'/news/latest-news?page='}
              nextAction={`/news/latest-news?page=${this.props.page + 1}`}
              prevAction={`/news/latest-news?page=${this.props.page - 1}`}
              itemsPerPage={this.props.itemsPerPage}
              totalItems={this.props.totalItems}
              currentPage={this.props.page}
            />
          </div>
        </ContentLayout>
      </Layout>
    );
  }
}

export default LatestNews;
