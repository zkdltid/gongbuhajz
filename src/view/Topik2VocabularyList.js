// /src/App.js
import { connect } from 'react-redux'
import React, { Component } from 'react';

import SearchInput from "../components/Pagination/SearchInput";
import PageSizeSelect from "../components/Pagination/PageSizeSelect";
import PageIndexButton from "../components/Pagination/PageIndexButton";
import FilterCheckBox from "../components/Pagination/FilterCheckBox";

import ListHeader from "../components/ListView/ListHeader"
import ListRow from "../components/ListView/ListRow"
import '../styles/table.scss';
import '../styles/paginations.scss';

import {
  vocabularyList
} from '../actions';


class Topik2VocabularyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        show: {
          korean:true,
          chinese:true,
          explain:true,
        },
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
    this.onSubmit = this.onSubmit.bind(this);

    this.onFilterChange = this.onFilterChange.bind(this);
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
  onFilterChange(e){
    console.log("ttt")
    const key = e.target.value;
    this.setState(state => ({
      show: {
        ...state.show,
        [key]: !state.show[key]
      }
    }));
  };

  // onKorean(){
  //   console.log("a")
  // }
  // onChinese(){
  //   console.log("b")
  // }
  // onExplain(){
  //   console.log("c")
  // }
  // onChinese(){
  //   const { show } = this.state.show
  //   show.korean != show.korean;
  //   this.setState({
  //     show:{
  //       ...show,
  //     }
  //   })
  // }

  onSubmit = (event) => {
    event.preventDefault();
    this.featchList()
  }


  render() {
    const { data } = this.props
    const { korean } = this.state.show
    // const { chinese } = this.state.show
    const { explain } = this.state.show
    return (
      <div>
        <div className='pagination-control'>
          <SearchInput onSubmit={ this.onSubmit } onChange={ this.onInputChange }/>
          <PageIndexButton onPrevPage={ this.onPrevPage } onNextPage={ this.onNextPage } />
          <PageSizeSelect onChange={ this.handleSelect } />
          {/* <FilterCheckBox onFilterChange={ this.onFilterChange } koreanState={ korean } chineseState={ chinese } explainState={ explain }  /> */}
          <FilterCheckBox onFilterChange={ this.onFilterChange } koreanState={ korean } explainState={ explain }  />
        </div>
        <div className='table-container'>
          <ListHeader korean={ korean } explain={ explain }/>
          <ListRow data={ data } korean={ korean } explain={ explain }/>
          {/* <ListHeader korean={ korean } chinese={ chinese } explain={ explain }/>
          <ListRow data={ data } korean={ korean } chinese={ chinese } explain={ explain }/> */}
        </div>
      </div>
    )
  }
}

// 取得該container需要的值
const mapStateToProps = (state,ownProps) => ({
  data : state.listReducer.data,
})

//處理action
const mapDispatchToProps = (dispatch,ownProps) => ({
    featchList: (params) => (
      dispatch(vocabularyList({ ...params }))
  )
});


export default connect(mapStateToProps,mapDispatchToProps)(Topik2VocabularyList)