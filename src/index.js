import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/table.css';
import {fetchTopik2Vocabulary} from './js/api/context/topik';
import reportWebVitals from './reportWebVitals';

class Topik2Vocabulary extends React.Component{

  state = {
    data: {
      data_list: []
    },
  }

  // 舊版用法
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     data:{
  //       data_list:[]
  //     },
  //   }
  // }

  componentDidMount(){
    fetchTopik2Vocabulary().then(({ data }) => {
      this.setState({
        data
      })
    })
  }

  render(){
    const { data } = this.state;
    return (
      <div className='table'>
        <div className='table-row' id='table-header'>
          <div className='table-cell'>수준</div>
          <div className='table-cell'>詞彙</div>
          <div className='table-cell'>어휘</div>
          <div className='table-cell'>길잡이말</div>
          <div className='table-cell'>품사</div>
        </div>
        {data.data_list.map((data) => 
        <div className='table-row' id='table-body'>
          <div className='table-cell'>{data.수준}</div>
          <div className='table-cell'>{data.詞彙}</div>
          <div className='table-cell'>{data.어휘}</div>
          <div className='table-cell'>{data.길잡이말}</div>
          <div className='table-cell'>{data.품사}</div>
        </div>
      )}
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    {/* <GetResponseInfo/> */}
    <Topik2Vocabulary/>
    {/* <Pagination /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
