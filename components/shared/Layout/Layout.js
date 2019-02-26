import React, { Component } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import axios from '../../../axios';

import Footer from '../Footer/Footer';
import HeaderBar from '../Header/HeaderBar';
import MobileMenu from '../Header/MobileMenu';

// For Smooth Scroll
import AnchorLink from 'react-anchor-link-smooth-scroll';

// import Loading from '../../LoadingPage/Loading';

// Adding Load Bar + Spinner when Routing (removing MAY increase speed of loading)
Router.onRouteChangeStart = (url) => {
  // console.log(url); // checking path routed to
  // Start NProgress loaders on route change
  NProgress.start();
};

// check when route change is complete, then end NProgress
Router.onRouteChangeComplete = () => NProgress.done();
// also check for errors and stop the progress bar if there is one
Router.onRouteChangeError = () => NProgress.done();

class Layout extends Component {
  state = {
    isShow: false,
    offsetTop: 350,
    ready: true
  };

  async componentDidMount() {
    window.addEventListener('scroll', this.scrollFunction);
    const { data } = await axios.get('/');
    // console.log(data);
  }

  componentWillUnmount() {
    // prevent event listener from trying to listen to this event and hence
    // changing state or setting state when this component mounts causes memory leaks
    window.removeEventListener('scroll', this.scrollFunction);
  }

  scrollFunction = () => {
    if (
      (document.body.scrollTop > this.state.offsetTop &&
        this.state.ready === true) ||
      (document.documentElement.scrollTop > this.state.offsetTop &&
        this.state.ready === true)
    ) {
      this.setState({
        isShow: true,
        ready: false
      });
    }
  };

  handleHideBackToTop = () => {
    setTimeout(() => {
      this.setState({ isShow: false, ready: true });
    }, 800);
  };

  render() {
    const classShow = this.state.isShow ? 'show' : '';
    // console.log(this.props.title);

    return (
      <React.Fragment>
        <Head>
          {/* Dynamic version placed in ContentLayout for now */}
          <title>React Dev</title>
          <link
            href="/static/img/favicon.png"
            rel="shortcut icon"
            type="image/x-icon"
          />
        </Head>

        <div id="page-wrap">
          <HeaderBar />
          {/* Header Component */}
          {this.props.children}

          {/* Footer Component */}
          <Footer />

          {/* Back to Top Anchor */}
        </div>

        <MobileMenu />
      </React.Fragment>
    );
  }
}

export default Layout;
