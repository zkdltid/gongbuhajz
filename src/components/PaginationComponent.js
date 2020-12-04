// import React from 'react';
// import { connect } from 'react-redux';
// import {
//   defaultPage,
//   nextPage,
//   prevPage,
//   sizeSelect,
//   vocabularyList,
//   searchKeyword,
// } from '../actions';

// import { BsSearch } from "react-icons/bs";

// import '../styles/paginations.scss';

// class PaginationComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.state = {
//     //   input: null,
//     // }
//     this.handleChange = this.handleChange.bind(this);
//     this.onFormSubmit = this.onFormSubmit.bind(this);
//     this.handleEnterKey = this.handleEnterKey.bind(this);
//     this.handleInputOnChange = this.handleChange.bind(this);
//  }


//   handleChange(event) {
//     event.preventDefault();
//     this.props.onDefaultPage()
//     this.props.onSelect(event.target.value)
//   }

//   handleInputOnChange(event){
//     event.preventDefault();
//     console.log('a')
//     this.props.onSearchKeyword(event.target.value)
//   }

//   onFormSubmit() {
//     this.props.onSearchKeyword('kkk')
//   }
//   handleEnterKey = (event) => {
//     event.preventDefault();
//     if(event.nativeEvent.keyCode === 13){ 
//       this.onFormSubmit()
//     }
// }

//   render() {
//     return (
//       <div className='pagination-control'>
//         <div className='search-input'>
//           <form onSubmit={this.onFormSubmit}>
//             <input placeholder='Search..' onKeyPress={this.handleEnterKey} onChange={this.handleInputOnChange}></input>
//             <button type="submit"><BsSearch className='search-icon'/></button>
//           </form>
//         </div>
//         <div className='page-button'>
//           <button onClick={this.props.onPrevPage} id='prevPage'>Prev Page</button>
//           <button onClick={this.props.onNextPage} id='nextPage'>Next Page</button>
//         </div>
//         <div className='size-control'>
//           <select className='size-items' onChange={this.handleChange}>
//             <option className='size-item'>10</option>
//             <option className='size-item'>20</option>
//             <option className='size-item'>30</option>
//             <option className='size-item'>40</option>
//             <option className='size-item'>50</option>
//           </select>
//         </div>
//         <div className='page-info'>
//           <span> Page Index : {this.props.page_index}</span>
//           <span> Total : {this.props.total}</span>
//         </div>
//       </div>
//     )
//   }

// }

// //取得該container需要的值
// const mapStateToProps = (state, ownProps) => ({
//   total: state.listReducer.data.total,
//   page_index: state.pageReducer.page_index,
//   size: state.sizeReducer.size,
//   search_keyword: state.searchKeywordReducer.keyword,
//   data: state.listReducer.data,
// })

// //處理action
// const mapDispatchToProps = (dispatch,ownProps) => ({
//   onDefaultPage: () => {
//     dispatch(defaultPage())
//   },
//   onNextPage: () => {
//     dispatch(nextPage())
//   },
//   onPrevPage: () => (
//     dispatch(prevPage())
//   ),
//   onSelect: (selectedSize) => (
//     dispatch(sizeSelect(selectedSize))
//     ),
//   onSearchKeyword: (input) => (
//     dispatch(searchKeyword(input))
//     ),
//   featchList: (index,selectedSize) => (
//       dispatch(vocabularyList({ page_index:index,size:selectedSize }))
//   )
// });


// export default connect(mapStateToProps,mapDispatchToProps)(PaginationComponent)
