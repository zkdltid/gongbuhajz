// /src/App.js
import { connect } from 'react-redux'
import React, { Component } from 'react';

import SearchInput from "../components/Pagination/SearchInput";
import PageSizeSelect from "../components/Pagination/PageSizeSelect";
import PageIndexButton from "../components/Pagination/PageIndexButton";
import PageInfo from "../components/Pagination/PageInfo";
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
          explain:true,
          koreanPractice:false,
          chinesePractice:false,
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
    this.onKoreanPracticeChange = this.onKoreanPracticeChange.bind(this);
    this.onChinesePracticeChange = this.onChinesePracticeChange.bind(this);
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
    const key = e.target.value;
    const { show } = this.state;
    // show.koreanPractice = false
    // show.chinesePractice = false
    this.setState(({
      show: {
        ...show,
        [key]: !show[key]
      }
    }));
  };

  onKoreanPracticeChange(){
    const { show } = this.state;
    show.koreanPractice = !show.koreanPractice
    if(show.koreanPractice){
      show.explain = false
      show.korean = true
      show.chinesePractice = false
    }
    this.setState(({
      show: {
        ...show,
      }
    
    }
    ));
    console.log(show)
  };

  onChinesePracticeChange(){
    const { show } = this.state;
    console.log(show.chinesePractice)
    show.chinesePractice = !show.chinesePractice
    
    if(show.chinesePractice){
      show.explain = true
      show.korean = false
      show.koreanPractice = false
    } 
    this.setState(({
      show: {
        ...show,
      }
    }
    ));
    console.log(show)
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.featchList()
  }


  render() {
    const { data } = this.props
    const { korean } = this.state.show

    const { explain } = this.state.show
    const { koreanPractice } = this.state.show
    const { chinesePractice } = this.state.show
    
    return (
      <div>
        <div className='pagination-control'>
          <SearchInput onSubmit={ this.onSubmit } onChange={ this.onInputChange }/>
          <PageInfo data={ data } />
          <PageIndexButton onPrevPage={ this.onPrevPage } onNextPage={ this.onNextPage } />
          <PageSizeSelect onChange={ this.handleSelect } />
          <FilterCheckBox onFilterChange={ this.onFilterChange } onKoreanPracticeChange={ this.onKoreanPracticeChange } onChinesePracticeChange={ this.onChinesePracticeChange } koreanState={ korean } explainState={ explain } koreanPracticeState={ koreanPractice }  chinesePracticeState={ chinesePractice }/>
        </div>
        <div className='table-container'>
          <ListHeader korean={ korean } explain={ explain } koreanPractice={ koreanPractice } chinesePractice={ chinesePractice }/>
          <ListRow data={ data } korean={ korean } explain={ explain } koreanPractice={ koreanPractice } chinesePractice={ chinesePractice }/>
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