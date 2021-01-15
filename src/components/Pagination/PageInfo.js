// import React from 'react';
import React, { Component } from 'react';

class PageInfo extends Component {
  render() {
    return (
        <div className="page-info">
            <div> Page Index : <span>{ this.props.data.page_index }</span></div>
            <div> Page Count : <span>{ this.props.data.page_count }</span></div>
        </div>
    );
  }
}

export default PageInfo;


