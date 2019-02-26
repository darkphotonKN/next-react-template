import React, { Component } from 'react';

import Link from 'next/link';
import { hideShowNav } from '../../utils/misc';

class PrimaryNav extends Component {
  constructor(props) {
    super(props);
    this.listItem = React.createRef();
  }

  componentDidMount() {
    hideShowNav();
  }

  render() {
    return (
      <React.Fragment>
        <nav className="primary-nav text-center">
          <ul className="nav-list d-none d-sm-none d-md-block">
            <li className="nav-item">
              <Link href="/news/latest-news">
                <a className="nav-link main-link">1</a>
              </Link>
              <ul className="drop-menu primary-drop">
                <li ref={this.listItem}>
                  <Link href="/news/latest-news">
                    <a className="nav-link">1.1</a>
                  </Link>
                </li>
                <li>
                  <Link href="/news/event">
                    <a className="nav-link">活動訊息</a>
                  </Link>
                </li>
                <li>
                  <Link href="/news/environmental-education">
                    <a className="nav-link">環境教育公告</a>
                  </Link>
                </li>
                <li>
                  <Link href="/news/faq">
                    <a className="nav-link">常見問答</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="/recreational">
                <a className="nav-link main-link">遊憩資訊</a>
              </Link>
              <ul className="drop-menu primary-drop">
                <li>
                  <Link href="/recreational">
                    <a className="nav-link">園區簡介</a>
                  </Link>
                </li>
                <li>
                  <Link href="/recreational/visitor-center">
                    <a className="nav-link">遊客中心</a>
                  </Link>
                </li>
                <li>
                  <Link href="/recreational/tourist-attractions">
                    <a className="nav-link">景點資源</a>
                  </Link>
                </li>
                <li>
                  <Link href="/recreational/travel-recommendations">
                    <a className="nav-link">無障礙遊程推薦</a>
                  </Link>
                </li>
                <li>
                  <Link href="/recreational/recreational-considerations">
                    <a className="nav-link">遊憩注意事項</a>
                  </Link>
                </li>
                <li>
                  <Link href="/recreational/emergency-service-information">
                    <a className="nav-link">緊急服務資訊</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="/conservation/nature">
                <a className="nav-link main-link">生態保育</a>
              </Link>
              <ul className="drop-menu primary-drop">
                <li>
                  <Link href="/conservation/nature">
                    <a className="nav-link">自然生態</a>
                  </Link>
                </li>
                <li>
                  <Link href="/conservation/geo-landscape">
                    <a className="nav-link">地質景觀</a>
                  </Link>
                </li>
                <li>
                  <Link href="/conservation/historic-culture">
                    <a className="nav-link">歷史人文</a>
                  </Link>
                </li>
                <li>
                  <Link href="/conservation/conservation-information">
                    <a className="nav-link">保育訊息</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="/environment-edu/qianshan-school">
                <a className="nav-link main-link">環境教育</a>
              </Link>
              <ul className="drop-menu primary-drop">
                <li>
                  <Link href="/environment-edu/qianshan-school">
                    <a className="nav-link">淺山學堂</a>
                  </Link>
                </li>
                <li>
                  <Link href="/environment-edu/outdoor-teaching">
                    <a className="nav-link">戶外教學</a>
                  </Link>
                </li>
                <li>
                  <Link href="/environment-edu/themed-activities">
                    <a className="nav-link">主題活動</a>
                  </Link>
                </li>
                <li>
                  <Link href="/environment-edu/school-promotion">
                    <a className="nav-link">到校推廣</a>
                  </Link>
                </li>
                <li>
                  <Link href="/environment-edu/professional-studies">
                    <a className="nav-link">專業研習</a>
                  </Link>
                </li>
                <li>
                  <Link href="/environment-edu/teaching-materials">
                    <a className="nav-link">教材與學習單</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="/application/feedback-mailbox">
                <a className="nav-link main-link">申辦服務</a>
              </Link>
              <ul className="drop-menu primary-drop">
                <li>
                  <Link href="/application/feedback-mailbox">
                    <a className="nav-link">意見信箱</a>
                  </Link>
                </li>
                <li>
                  <Link href="/application/online-registration">
                    <a className="nav-link">活動線上報名</a>
                  </Link>
                </li>
                <li>
                  <Link href="/application/online-application">
                    <a className="nav-link">線上申請</a>
                  </Link>
                </li>
                <li>
                  <Link href="/application/download-area">
                    <a className="nav-link">下載專區</a>
                  </Link>
                </li>
                <li>
                  <Link href="/application/single-window">
                    <a className="nav-link">單一窗口</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="/administrative/about">
                <a className="nav-link main-link">行政資訊</a>
              </Link>
              <ul className="drop-menu primary-drop">
                <li>
                  <Link href="/administrative/about">
                    <a className="nav-link">關於本處</a>
                  </Link>
                </li>
                <li>
                  <Link href="/administrative/announcement/decree">
                    <a className="nav-link">行政公告</a>
                  </Link>
                </li>
                <li>
                  <Link href="/administrative/government">
                    <a className="nav-link">政府資訊公開</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="/multimedia/online-gallery">
                <a className="nav-link main-link nav-last">多媒體專區</a>
              </Link>
              <ul className="drop-menu primary-drop">
                <li>
                  <Link href="/multimedia/online-gallery">
                    <a className="nav-link">線上藝廊</a>
                  </Link>
                </li>
                <li>
                  <Link href="/multimedia/video-gallery">
                    <a className="nav-link">影音觀賞</a>
                  </Link>
                </li>
                <li>
                  <Link href="/multimedia/publication">
                    <a className="nav-link">出版品</a>
                  </Link>
                </li>
                <li>
                  <Link href="/multimedia/e-book-area">
                    <a className="nav-link">電子書專區</a>
                  </Link>
                </li>
                <li>
                  <Link href="/multimedia/e-card">
                    <a className="nav-link">電子賀卡</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="primary-nav-bg d-none d-sm-none d-md-block" />
      </React.Fragment>
    );
  }
}

export default PrimaryNav;
