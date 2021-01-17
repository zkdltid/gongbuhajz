// import React from 'react';
import React, { Component } from 'react';
import Pagination from "react-js-pagination";
// require("bootstrap/less/bootstrap.less");
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar } from "react-bootstrap";
// import Paginations from 'react-bootstrap/Pagination'
class PaginationSelect extends Component {
  render() {
    return (
      <div className="pagination-container">
        <Pagination
          activePage={this.props.activePage}
          itemsCountPerPage={10}
          totalItemsCount={this.props.total}
          pageRangeDisplayed={5}
          onChange={this.props.handlePageChange}
        />
      </div>

    );
  }
}

export default PaginationSelect;