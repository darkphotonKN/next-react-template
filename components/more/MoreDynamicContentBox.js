import React, { Component } from "react";

// expandable more content box, refer /conservation/conservation-messages for example

class MoreContentBox extends Component {
  state = {
    boxShow: false
  };

  handleShowBox = () => {
    this.setState({ boxShow: !this.state.boxShow });
  };

  render() {
    const { title, content, background } = this.props;

    return (
      <div className="row">
        <div className="dynamic-content-box">
          <div
            className="content-header"
            style={{
              backgroundImage: `url('${background}')`,
              backgroundSize: "cover"
            }}
          >
            <h4 className="conserv-msg-header mt-3">{title}</h4>
          </div>

          <p
            className={
              this.state.boxShow ? "more-content show" : "more-content"
            }
          >
            {content}
          </p>

          <div className="more-expand">
            <button className="more-btn" onClick={this.handleShowBox}>
              {this.state.boxShow ? "收 合" : "查看更多"}
            </button>
            <div className="horizontal-line" />
          </div>
        </div>
      </div>
    );
  }
}

export default MoreContentBox;
