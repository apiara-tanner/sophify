import logo from './logo.svg';
import './App.css';
import {BackGround, RecLib, RecGrid, OffSet, SubHeader} from './style.js'
import {Grommet} from 'grommet';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './Header.js';
import Bottom from './Bottom.js';

import { SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import React, { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
const data = [
  {
    key: '1',
    name: 'Imperial',
    age: 32,
    address: 'New York No. 1 Lake Park',
    open: 'No',
  },
  {
    key: '2',
    name: 'Smokehouse 21',
    age: 42,
    address: 'London No. 1 Lake Park',
    open: 'No',
  },
  {
    key: '3',
    name: 'Jim Green',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    open: 'No',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
    open: 'No',
  },
];
const Lib = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 10,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  const columns = [
    {
      title: 'Restaurant Name',
      dataIndex: 'name',
      key: 'name',
      width: '30%',
      ...getColumnSearchProps('name'),
    },
    {
      title: 'Year',
      dataIndex: 'age',
      key: 'age',
      width: '20%',
      ...getColumnSearchProps('age'),
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      ...getColumnSearchProps('address'),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Open?',
      dataIndex: 'open',
      key: 'open',
      ...getColumnSearchProps('open'),
      sorter: (a, b) => a.open.length - b.open.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'More Details',

    },

  ];
  return(

    <OffSet>
    <SubHeader> Restaurants Archieved </SubHeader>
    <Table columns={columns} dataSource={data} />

    </OffSet>


  );

};
export default Lib;
