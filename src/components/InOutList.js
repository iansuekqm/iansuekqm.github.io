import React from 'react';
import { Table } from 'antd';
const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        width: 150,
    },
    {
        title: '进出时间',
        dataIndex: 'address',
    },
];
const data = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}
const InOutList = () => (
    <Table
        columns={columns}
        dataSource={data}
        pagination={{
            pageSize: 50,
        }}
        scroll={{
            y: 240,
        }}
    />
);
export default InOutList