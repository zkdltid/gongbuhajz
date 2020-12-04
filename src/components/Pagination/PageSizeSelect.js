// import React from 'react';
import React, { Component } from 'react';
import Select from 'react-select'

const pageSizeOptions = [
  {value: 10, label:10},
  {value: 20, label:20},
  {value: 30, label:30},
  {value: 40, label:40},
]

class PageSizeSelect extends Component {
  constructor(props) {
    super(props);
    this.state ={
      selectedPageSize: {value: 20, label:20},
    }
  }
  handleChange = option => {
    const { onChange } = this.props;
    // preferenceHandler.set(PAGE_SIZE_KEY, option);
    this.setState({
      selectedPageSize: option,
    });
    onChange(option);
  }
  render() {
    const { selectedPageSize } = this.state;
    return (
        <div className="page-size-select-wrapper">
            <Select
                className="page-size-select"
                options={ pageSizeOptions }
                value={ selectedPageSize }
                onChange={ this.handleChange }
            />
        </div>
    );
  }
}

export default PageSizeSelect;