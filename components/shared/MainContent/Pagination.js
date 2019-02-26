import React, { Component } from 'react';
import Pagination from 'react-js-pagination';

class Paginate extends Component {
  state = {
    activePage: this.props.activePage
  };

  handlePageChange = (pageNumber) => {
    //console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  };

  render() {
    const {
      itemsCountPerPage,
      totalItemsCount,
      pageRangeDisplayed
    } = this.props;

    const { activePage } = this.state;

    return (
      <div className="mt-4 section-pagination">
        <Pagination
          activePage={activePage}
          itemsCountPerPage={itemsCountPerPage}
          totalItemsCount={totalItemsCount}
          pageRangeDisplayed={pageRangeDisplayed}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Paginate;
