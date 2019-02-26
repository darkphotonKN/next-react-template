import React, { Component } from 'react';

class SocialBar extends Component {
  state = {
    windows: ''
  };
  componentDidMount = () => {
    this.setState({
      windows: window.location.href
    });
  };

  render() {
    const { windows } = this.state;
    return (
      <div className="social-bar-wrap">
        <div className="social-bar">
          <div className="social-icon" id="fb-icon">
            <a
              href={'https://www.facebook.com/sharer/sharer.php?u=' + windows}
              target="_blank"
              title="Share to Facebook"
            >
              <img src="/static/img/icon/facebook.svg" alt="facebook" />
            </a>
          </div>
          <div className="social-icon" id="line-icon">
            <a
              href={
                'https://social-plugins.line.me/lineit/share?url=' + windows
              }
              target="_blank"
              title="Share to LINE"
            >
              <img src="/static/img/icon/line.svg" alt="line" />
            </a>
          </div>
          <div className="social-icon" id="email-icon">
            <a href="#">
              <img src="/static/img/icon/mail.svg" alt="mail" />
            </a>
          </div>
          <div className="social-icon" id="print-icon">
            <a href="javascript:window.print()" target="_blank" title="Print">
              <img src="/static/img/icon/print-icon.svg" alt="print" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SocialBar;
