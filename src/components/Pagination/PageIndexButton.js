// import React from 'react';
import React, { Component } from 'react';

class PageIndexButton extends Component {
  render() {
    return (
        <div className="page-button">
            <button className="prevPage" onClick={ this.props.onPrevPage }>
                Prev Page
            </button>
            <button className="nextPage" onClick={ this.props.onNextPage }>
                Next Page
            </button>
        </div>
    );
  }
}

export default PageIndexButton;