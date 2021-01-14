// import React from 'react';
// import { connect } from 'react-redux'
// import {
//   vocabularyList
// } from '../actions';

// import '../styles/table.scss';

// class VocabularyTableComponent extends React.Component {
//   componentDidMount (){
//     this.props.featchList(this.props.page_index,this.props.size)
//   }
//   componentDidUpdate(prevProps){
//     // if (this.props.page_index !== prevProps.page_index) {
//     //   console.log(this.props.size)
//     //   this.props.featchList(this.props.page_index,this.props.size)

//     // } else if ( this.props.size !== prevProps.size ){
//     //   this.props.featchList(this.props.page_index,this.props.size)
//     // }

//     // if (this.props.params !== prevProps.params) {
//     //   this.props.featchList(this.props.params)
//     // }
//   }

//   render() {
//     console.log(this.props.size)
//     let tableData;
//     if (this.props.data.data_list) {
//       tableData = this.props.data.data_list.map((list, index) => (
//         <div className='table-row' id='table-body'key={index}> 
//           <div className='table-cell'>{list.수준}</div>
//           <div className='table-cell'>{list.詞彙}</div>
//           <div className='table-cell'>{list.어휘}</div>
//           <div className='table-cell'>{list.길잡이말}</div>
//           <div className='table-cell'>{list.품사}</div>
//         </div>
//       ))
//     } else{
//       tableData = <div>Loading...</div>;
//     }

//     return (
//       <div className='vocabulary-table'>
//           {/* <div>Total: {this.props.data.total}</div>
//           <div>PageIndex: {this.props.page_index}</div> */}
//           <div className='table'>
//             <div className='table-row' id='table-header'>
//               <div className='table-cell'>수준</div>
//               <div className='table-cell'>詞彙</div>
//               <div className='table-cell'>어휘</div>
//               <div className='table-cell'>길잡이말</div>
//               <div className='table-cell'>품사</div>
//             </div>
//               {tableData}
//           </div>
//         </div>
//       )
//     }
//   }



// //取得該container需要的值
// const mapStateToProps = (state,ownProps) => ({
//   page_index : state.pageReducer.page_index,
//   size : state.sizeReducer.size,
//   // page_index : state.pageReducer.page_index,
//   // size : state.sizeReducer.size,
//   data : state.listReducer.data,
// })

// //處理action
// const mapDispatchToProps = (dispatch,ownProps) => ({
//     featchList: (index,selectedSize) => (
//       dispatch(vocabularyList({ page_index:index,size:selectedSize }))
//   )
// });


// export default connect(mapStateToProps,mapDispatchToProps)(VocabularyTableComponent)
