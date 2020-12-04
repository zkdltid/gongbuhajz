// /src/App.js
import { connect } from 'react-redux'
import React, { Component } from 'react';

import SearchInput from "./Pagination/SearchInput";
import PageSizeSelect from "./Pagination/PageSizeSelect";
import PageIndexButton from "./Pagination/PageIndexButton";

import ListHeader from "./ListView/ListHeader"
import ListRow from "./ListView/ListRow"
import '../styles/table.scss';
import '../styles/paginations.scss';

import {
  vocabularyList
} from '../actions';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        queryPayload: {
            search: undefined,
            // filter: {
            //     [FILTER_SERVICE]: undefined,
            // },
            // sort: {},
            page_index: 1,
            size: 20,
        },
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.onPrevPage = this.onPrevPage.bind(this);
    this.onNextPage = this.onNextPage.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onKeyPressEnter = this.onKeyPressEnter.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount(){
    this.featchList()
  }

  handleSelect(selectedSize) {
    const { queryPayload } = this.state;
    queryPayload.page_index = 1;
    queryPayload.size = selectedSize.value;
    this.setState({
        queryPayload: {
            ...queryPayload,
        }
    }, this.featchList);
  }
  onPrevPage() {
    const { queryPayload } = this.state;
    queryPayload.page_index = queryPayload.page_index-1;
    this.setState({
        queryPayload: {
            ...queryPayload,
        }
    }, this.featchList);
  }

  onNextPage() {
    const { queryPayload } = this.state;
    queryPayload.page_index = queryPayload.page_index+1;
    this.setState({
        queryPayload: {
            ...queryPayload,
        }
    }, this.featchList);
  }

  featchList = () => {
    const { queryPayload } = this.state;
    const { ...params } = queryPayload;
    return this.props.featchList({
        ...params,
    })
  };

  onInputChange(event){
    const { queryPayload } = this.state;
    event.preventDefault();
    queryPayload.search = event.target.value;
    queryPayload.page_index = 1;
    this.setState({
      queryPayload: {
          ...queryPayload,
      }
    })
  }

  onKeyPressEnter = (event) => {
    event.preventDefault();
    if(event.nativeEvent.keyCode === 13){ 
    this.featchList()
    }
  }
  onSubmit = (event) => {
    event.preventDefault();
    this.featchList()
  }


  render() {
    const { data } = this.props
    return (
      <div>
        <div className='pagination-control'>
          <SearchInput onSubmit={ this.onSubmit } onKeyPress={ this.onKeyPressEnter } onChange={ this.onInputChange }/>
          <PageIndexButton onPrevPage={ this.onPrevPage } onNextPage={ this.onNextPage } />
          <PageSizeSelect onChange={ this.handleSelect } />
        </div>
        <div>
          <ListHeader/>
          <ListRow data={ data }/>
        </div>
      </div>
    )
  }
}

// 取得該container需要的值
const mapStateToProps = (state,ownProps) => ({
  // page_index : state.pageReducer.page_index,
  // size : state.sizeReducer.size,
  data : state.listReducer.data,
})

//處理action
const mapDispatchToProps = (dispatch,ownProps) => ({
    featchList: (params) => (
      dispatch(vocabularyList({ ...params }))
  )
});


export default connect(mapStateToProps,mapDispatchToProps)(App)