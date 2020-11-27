import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/table.css';
import { fetchTopik2Vocabulary } from './js/api/context/topik';
import reportWebVitals from './reportWebVitals';

class Topik2Vocabulary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total:null,
      page_index: 1,
      size: 10,
      data_list: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleNextButon = this.handleNextButon.bind(this);
    this.handlePrevButon = this.handlePrevButon.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    this.setState({ size: event.target.value,
      page_index: 1,
     });
    this.callApi({ 
      size: event.target.value,
     });
  }
  
  handleNextButon() {
    let new_page_index = this.state.page_index+1
    this.setState({ page_index: new_page_index });
    this.callApi({ 
      page_index: new_page_index,
      size: this.state.size,
    } );
  }

  handlePrevButon() {
    let new_page_index = this.state.page_index-1
    this.setState({ page_index: new_page_index });
    this.callApi({ 
      page_index: new_page_index,
      size: this.state.size,
    } );
  }  

  callApi = (params) => {
    fetchTopik2Vocabulary(params)
      .then(response => {
        console.log(response);
        this.setState({ data_list: response.data.data_list });
        this.setState({ total: response.data.total });
        console.log(this.state.data_list);
      })
      .catch(error => {
        console.log(error);
      });
  }


  componentDidMount(){
    this.callApi();
  }

  render() {
    return (
      <div className='table'>
        <div>
            <select value={this.state.size} onChange={this.handleChange}>
              <option value='10'>10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </select>
          <button onClick={this.handlePrevButon}>
            Prev Page
          </button>
          <button onClick={this.handleNextButon}>
            Next Page
          </button>
          <div>Page Index : {this.state.page_index}</div>
          <div>Total Count : {this.state.total}</div>
          {/* <div>Page Index : {this.state.page_index}</div> */}
        </div>
        <div className='table'>
          <div className='table-row' id='table-header'>
            <div className='table-cell'>수준</div>
            <div className='table-cell'>詞彙</div>
            <div className='table-cell'>어휘</div>
            <div className='table-cell'>길잡이말</div>
            <div className='table-cell'>품사</div>
          </div>
          {this.state.data_list.map((list, index) => (
            <div className='table-row' id='table-body'>
              <div className='table-cell'>{list.수준}</div>
              <div className='table-cell'>{list.詞彙}</div>
              <div className='table-cell'>{list.어휘}</div>
              <div className='table-cell'>{list.길잡이말}</div>
              <div className='table-cell'>{list.품사}</div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Topik2Vocabulary />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
