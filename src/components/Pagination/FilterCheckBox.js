// import React from 'react';
import React, { Component } from 'react';

class FilterCheckBox extends Component {
  render() {
    return (
        <div className="filter-checkbox">
          <input
            type="checkbox"
            value="korean"
            onChange={this.props.onFilterChange}
            checked={ this.props.koreanState }
          />單字
          {/* <input
            type="checkbox"
            value="chinese"
            onChange={ this.props.onFilterChange }
            checked={ this.props.chineseState }
          />中文 */}
          <input
            type="checkbox"
            value="explain"
            onChange={ this.props.onFilterChange }
            checked={ this.props.explainState }
          />解釋

        </div>
    );
  }
}

export default FilterCheckBox;