//目前寫死 data key
import React, { Component } from 'react';

class ListHeader extends Component {
    render() {
        return (
        <div className='table'>
            <div className='table-row' id='table-header'>
                {/* <div className='table-cell'>수준</div>
                <div className='table-cell'>詞彙</div>
                <div className='table-cell'>어휘</div>
                <div className='table-cell'>길잡이말</div>
                <div className='table-cell'>품사</div> */}

                
                <div className='table-cell'>單字</div>
                <div className='table-cell'>中文</div>
                <div className='table-cell'>補充</div>

            </div>
        </div>
        );
    }
}

export default ListHeader;