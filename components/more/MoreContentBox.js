import React, { Component } from 'react';

// expandable more content box, refer /conservation/conservation-messages for example

class MoreContentBox extends Component {
  state = {
    boxShow: false
  };

  handleShowBox = () => {
    this.setState({ boxShow: !this.state.boxShow });
  };

  render() {
    const { title, content } = this.props;

    return (
      <React.Fragment>
        <h4 className="conserv-msg-header mt-5">● {title}</h4>

        <div
          className={this.state.boxShow ? 'more-content show' : 'more-content'}
          dangerouslySetInnerHTML={{ __html: content }}
        />

        <div className="more-expand">
          <button className="more-btn" onClick={this.handleShowBox}>
            {this.state.boxShow ? '收 合' : '查看更多'}
          </button>
          <div
            className={
              this.state.boxShow ? 'horizontal-line mt-3' : 'horizontal-line'
            }
          />
        </div>
        {/* <div className="more-retract">
          <button className="more-btn">收 合</button>
          <div className="horizontal-line" />
        </div> */}
      </React.Fragment>
    );
  }
}

export default MoreContentBox;
