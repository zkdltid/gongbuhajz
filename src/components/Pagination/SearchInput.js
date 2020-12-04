// import React from 'react';
import React, { Component } from 'react';
import { BsSearch } from "react-icons/bs";

class SearchInput extends Component {
  render() {
    return (
        <div className='search-input'>
          <form onSubmit={this.props.onSubmit}>
            <input placeholder='Search..' onChange={this.props.onChange}></input>
            <button type="submit"><BsSearch className='search-icon'/></button>
          </form>
        </div>
    );
  }
}

export default SearchInput;