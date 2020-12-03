import React from 'react';
import { connect } from 'react-redux';
import {
  defaultPage,
  nextPage,
  prevPage,
  sizeSelect,
  vocabularyList,
} from '../actions';

import { BsSearch } from "react-icons/bs";

import '../styles/paginations.scss';

class PaginationComponent extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
 }

  handleChange(event) {
    event.preventDefault();
    this.props.onDefaultPage()
    this.props.onSelect(event.target.value)
  }

  handleSearch() {
    alert('Comming Soon!!')
  }

  handleEnterKey = (e) => {
    if(e.nativeEvent.keyCode === 13){ 
         this.handleSearch()
    }
}

  render() {
    return (
      <div className='pagination-control'>
        <div className='search-input'>
          <input placeholder="Search.." onKeyPress={this.handleEnterKey}></input>
          <button onClick={ this.handleSearch } ><BsSearch className='search-icon'/></button>
        </div>
        <div className='page-button'>
          <button onClick={this.props.onPrevPage} id='prevPage'>Prev Page</button>
          <button onClick={this.props.onNextPage} id='nextPage'>Next Page</button>
        </div>
        <div className='size-control'>
          <select className='size-items' onChange={this.handleChange}>
            <option className='size-item'>10</option>
            <option className='size-item'>20</option>
            <option className='size-item'>30</option>
            <option className='size-item'>40</option>
            <option className='size-item'>50</option>
          </select>
        </div>
        <div className='page-info'>
          <div>Page Index : {this.props.page_index}</div>
        </div>
      </div>
    )
  }

}

//取得該container需要的值
const mapStateToProps = (state, ownProps) => ({
  page_index: state.reducer.page_index,
  size: state.sizeReducer.size,
  data: state.listReducer.data,
})

//處理action
const mapDispatchToProps = (dispatch,ownProps) => ({
  onDefaultPage: () => {
    dispatch(defaultPage())
  },
  onNextPage: () => {
    dispatch(nextPage())
  },
  onPrevPage: () => (
    dispatch(prevPage())
  ),
  onSelect: (selectedSize) => (
    dispatch(sizeSelect(selectedSize))
    ),
  featchList: (index,selectedSize) => (
      dispatch(vocabularyList({ page_index:index,size:selectedSize }))
  )
});


export default connect(mapStateToProps,mapDispatchToProps)(PaginationComponent)
