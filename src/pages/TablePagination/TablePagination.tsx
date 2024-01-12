import React, { useState, useEffect } from 'react';
import { Table, Button } from 'antd';
import axios from 'axios';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  country: string;
  name: string;
}

const limit = 10;

const columns: ColumnsType<DataType> = [
  {
    title: 'Страна',
    dataIndex: 'country',
    key: 'country',
  },
  {
    title: 'Название школы',
    dataIndex: 'name',
    key: 'name',
  },
];

const TablePagination: React.FC = () => {
  const [offset, setOffset] = useState<number>(0);
  const [dataSource, setDataSource] = useState([]);

  const getUniversity = async (offset: number, limit: number) => {
    try {
      const response = await axios.get(
        `http://universities.hipolabs.com/search?offset=${offset*limit}&limit=${limit}`
      );
      console.log(response)
      setDataSource(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getUniversity(offset, limit);
  }, [offset]);

  return (
    <>
      <Table<DataType> dataSource={dataSource} columns={columns} pagination={false} />
      <div className="wrapper">
          <p>Текущая страница: {offset+1}</p>
        <div>
          <Button className='btn' onClick={() => setOffset(offset - 1)} disabled={!offset}>
            Назад
          </Button>
          <Button className='btn' onClick={() => setOffset(offset + 1)}>
            Вперед
          </Button>
        </div>
      </div>
    </>
  );
};

export default TablePagination;