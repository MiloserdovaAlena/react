import React from 'react'; 
import { Table } from 'antd'; 
 
function App() { 
  interface IDataItem { 
    key: string; 
    name: string; 
    age: number; 
    address: string; 
  } 
 
 
  const dataSource: IDataItem[] = [ 
    { key: '1', name: 'John Doe', age: 25, address: 'Street 123' }, 
    { key: '2', name: 'Jane Smith', age: 30, address: 'Street 456' }, 
    { key: '3', name: 'Alice Johnson', age: 28, address: 'Avenue 789' }, 
    { key: '4', name: 'Bob Brown', age: 35, address: 'Road 321' }, 
    { key: '5', name: 'Emily Davis', age: 22, address: 'Lane 654' }, 
    { key: '6', name: 'Michael Wilson', age: 40, address: 'Boulevard 987' }, 
    { key: '7', name: 'Sophia Lee', age: 27, address: 'Way 234' }, 
    { key: '8', name: 'William Martinez', age: 33, address: 'Circle 567' }, 
    { key: '9', name: 'Olivia Garcia', age: 29, address: 'Square 890' }, 
    { key: '10', name: 'Daniel Rodriguez', age: 26, address: 'Park 432'}, 
  ]; 
 
  const columns = [ 
    { title: 'Name', dataIndex: 'name', key: 'name' }, 
    { title: 'Age', dataIndex: 'age', key: 'age' }, 
    { title: 'Address', dataIndex: 'address', key: 'address' }, 
  ]; 
  return ( 
    <div> 
      <Table<IDataItem> 
        dataSource={dataSource} 
        columns={columns} 
      /> 
    </div> 
  ); 
 
} 
 
export default App;