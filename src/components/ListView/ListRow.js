//目前寫死 data key
import React, { Component } from 'react';

class ListRow extends Component {

    render() {
        const { data } = this.props
        const { korean } = this.props
        const { chinese } = this.props
        const { explain } = this.props
        let tableData;
        if (data.data_list) {
            tableData = data.data_list.map((list, index) => (
                <div className='table-row' id='table-body' key={index}>
                    {/* <div className='table-cell'>{list.수준}</div>
                    <div className='table-cell'>{list.詞彙}</div>
                    <div className='table-cell'>{list.어휘}</div>
                    <div className='table-cell'>{list.길잡이말}</div>
                    <div className='table-cell'>{list.품사}</div> */}

                    <div className='table-cell'>{korean ? list.單字:" "}</div>
                    <div className='table-cell'>{chinese ? list.中文:" "}</div>
                    <div className='table-cell'>
                        { explain ? list.補充.map((k,index) => (
                            <span key={index}>{k}<br/></span>)):""}
                    </div>
                </div>
            ))
        } else
            {
            tableData = <div>Loading...</div>;
        }


        return (
            <div className='table'>
                {tableData}
            </div>
        );
    }
}

export default ListRow;