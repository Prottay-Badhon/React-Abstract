import './App.css';
import React, {Component} from 'react';
import ReactTable from 'react-table';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core/List';
class MyTable extends Component {
    render(){
        const tableData =[]
        const col=[{Header:"name",accessor: " "},{Header:"age",accessor: " "}]
        return (

            <div>
               <h2>My name is Badhon</h2>
                <ReactTable
                data={tableData}
                columns={col}
                defaultPageSize ={2}
                pageSizeOption ={[2,4,6,8,10]}



                />
            </div>
        );
    }
}

export default MyTable;