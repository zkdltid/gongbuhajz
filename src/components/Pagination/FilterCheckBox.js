// import React from 'react';
import React, { Component } from 'react';

class FilterCheckBox extends Component {
  render() {
    return (
        <div className="filter-checkbox">
          單字<input
            type="checkbox"
            value="korean"
            onChange={this.props.onFilterChange}
            checked={ this.props.koreanState }
          />
          {/* <input
            type="checkbox"
            value="chinese"
            onChange={ this.props.onFilterChange }
            checked={ this.props.chineseState }
          />中文 */}
          解釋
          <input
            type="checkbox"
            value="explain"
            onChange={ this.props.onFilterChange }
            checked={ this.props.explainState }
          />
          韓翻中練習
          <input
            type="checkbox"
            value="koreanPractice"
            onChange={ this.props.onKoreanPracticeChange }
            checked={ this.props.koreanPracticeState }
          />
          中翻韓練習
          <input
            type="checkbox"
            value="chinesePractice"
            onChange={ this.props.onChinesePracticeChange }
            checked={ this.props.chinesePracticeState }
          />
        </div>
    );
  }
}

export default FilterCheckBox;