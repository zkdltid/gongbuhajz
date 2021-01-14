import ReactDOM from 'react-dom';
import React, { Component } from 'react';

import Topik2VocabularyList from "./view/Topik2VocabularyList";
import { Provider } from 'react-redux'
import store from './store/configureStore'



class Main extends Component {

  render() {
    return (
      <div>
        <Topik2VocabularyList/>
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
