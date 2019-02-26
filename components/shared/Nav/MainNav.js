import React, { Component } from 'react';
import Link from 'next/link';

import { hideShowNav } from '../../utils/misc';

class MainNav extends Component {
  componentDidMount() {
    hideShowNav();
  }
  render() {
    return (
      <React.Fragment>
        <nav className="main-nav text-center d-none d-sm-none d-md-block">
          <ul className="nav-list">
            <li className="nav-item">
              <Link href="/news/latest-news">
                <a className="nav-link main-link">1</a>
              </Link>
              <span />
              <ul className="drop-menu">
                <li>
                  <Link href="/news/latest-news">
                    <a className="nav-link">1.1</a>
                  </Link>
                </li>
                <li>
                  <Link href="/news/event">
                    <a className="nav-link" />
                  </Link>
                </li>
                <li>
                  <Link href="/news/environmental-education">
                    <a className="nav-link" />
                  </Link>
                </li>
                <li>
                  <Link href="/news/faq">
                    <a className="nav-link" />
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="/recreational">
                <a className="nav-link main-link">2</a>
              </Link>
              <span />
              <ul className="drop-menu">
                <li>
                  <Link href="/recreational">
                    <a className="nav-link">2.1</a>
                  </Link>
                </li>
                <li>
                  <Link href="/recreational/visitor-center">
                    <a className="nav-link" />
                  </Link>
                </li>
                <li>
                  <Link href="/recreational/tourist-attractions">
                    <a className="nav-link" />
                  </Link>
                </li>
                <li>
                  <Link href="/recreational/travel-recommendations">
                    <a className="nav-link" />
                  </Link>
                </li>
                <li>
                  <Link href="/recreational/recreational-considerations">
                    <a className="nav-link" />
                  </Link>
                </li>
                <li>
                  <Link href="/recreational/emergency-service-information">
                    <a className="nav-link" />
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="/conservation/nature">
                <a className="nav-link main-link">3</a>
              </Link>
              <span />
              <ul className="drop-menu">
                <li>
                  <Link href="/conservation/nature">
                    <a className="nav-link">3.1</a>
                  </Link>
                </li>
                <li>
                  <Link href="/conservation/geo-landscape">
                    <a className="nav-link" />
                  </Link>
                </li>
                <li>
                  <Link href="/conservation/historic-culture">
                    <a className="nav-link" />
                  </Link>
                </li>
                <li>
                  <Link href="/conservation/conservation-information">
                    <a className="nav-link" />
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="/environment-edu/qianshan-school">
                <a className="nav-link main-link">4</a>
              </Link>
              <span />
              <ul className="drop-menu">
                <li>
                  <Link href="/environment-edu/qianshan-school">
                    <a className="nav-link">4.1</a>
                  </Link>
                </li>
                <li>
                  <Link href="/environment-edu/outdoor-teaching">
                    <a className="nav-link" />
                  </Link>
                </li>
                <li>
                  <Link href="/environment-edu/themed-activities">
                    <a className="nav-link" />
                  </Link>
                </li>
                <li>
                  <Link href="/environment-edu/school-promotion">
                    <a className="nav-link" />
                  </Link>
                </li>
                <li>
                  <Link href="/environment-edu/professional-studies">
                    <a className="nav-link" />
                  </Link>
                </li>
                <li>
                  <Link href="/environment-edu/teaching-materials">
                    <a className="nav-link" />
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="/application/feedback-mailbox">
                <a className="nav-link main-link">5</a>
              </Link>
              <span />
              <ul className="drop-menu">
                <li>
                  <Link href="/application/feedback-mailbox">
                    <a className="nav-link">5.1</a>
                  </Link>
                </li>
                <li>
                  <Link href="/application/online-registration">
                    <a className="nav-link" />
                  </Link>
                </li>
                <li>
                  <Link href="/application/online-application/booking-guide">
                    <a className="nav-link" />
                  </Link>
                </li>
                <li>
                  <Link href="/application/download-area">
                    <a className="nav-link" />
                  </Link>
                </li>
                <li>
                  <Link href="/application/single-window">
                    <a className="nav-link" />
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="/administrative/about">
                <a className="nav-link main-link">6</a>
              </Link>
              <span />
              <ul className="drop-menu">
                <li>
                  <Link href="/administrative/about">
                    <a className="nav-link">6.1</a>
                  </Link>
                </li>
                <li>
                  <Link href="/administrative/announcement/decree">
                    <a className="nav-link" />
                  </Link>
                </li>
                <li>
                  <Link href="/administrative/government">
                    <a className="nav-link" />
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link href="/multimedia/online-gallery">
                <a className="nav-link main-link">7</a>
              </Link>
              <span />
              <ul className="drop-menu">
                <li>
                  <Link href="/multimedia/online-gallery">
                    <a className="nav-link">7.1</a>
                  </Link>
                </li>
                <li>
                  <Link href="/multimedia/video-gallery">
                    <a className="nav-link" />
                  </Link>
                </li>
                <li>
                  <Link href="/multimedia/publication">
                    <a className="nav-link" />
                  </Link>
                </li>
                <li>
                  <Link href="/multimedia/e-book-area">
                    <a className="nav-link" />
                  </Link>
                </li>
                <li>
                  <Link href="/multimedia/e-card">
                    <a className="nav-link" />
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <nav className="main-nav text-center d-block d-sm-block d-md-none" />
      </React.Fragment>
    );
  }
}

export default MainNav;
