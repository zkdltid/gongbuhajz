import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import App from "./components/App";
// import PageSizeSelect from "./components/Pagination/PageSizeSelect";
// import ListHeader from "./components/ListView/ListHeader"
// import ListRow from "./components/ListView/ListRow"

// import Pagination from './components/PaginationComponent'
// import VocabularyTableComponent from './components/VocabularyTableComponent'
import { Provider } from 'react-redux'
import store from './store/configureStore'



class Main extends Component {

  handleSelect(selectedSize){
    console.log(selectedSize)
  }

  render() {
    return (
      <div>
        <App/>
      {/* <PageSizeSelect onChange={this.handleSelect} />
      <ListHeader/> */}
      {/* <ListRow data={}/> */}

      {/* <Pagination />
      <VocabularyTableComponent /> */}
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
