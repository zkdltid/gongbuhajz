import ReactDOM from 'react-dom';
// import './styles/index.css';
import React, { Component } from 'react';

import Pagination from './components/PaginationComponent'
import VocabularyTableComponent from './components/VocabularyTableComponent'
import { Provider } from 'react-redux'
import store from './store/configureStore'



class Main extends Component {
  render() {
    return (
      <div>
      <Pagination />
      <VocabularyTableComponent />
      </div>
    )
  }
}


ReactDOM.render(
  <Provider store={ store }>
    <Main/>
  </Provider>,
  document.getElementById('root')
);
