import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ListUser from "./ListUser";
import CreateUser from "./CreateUser";
import EditUser from "./EditUser";
import InOutList from "./InOutList";
import TemHumidity from "./TemHumidity";

const items = [
    {
        label: '实验室人员进出记录',
        key: 'mail',
        icon: <MailOutlined />,
        link: '/inout/list',
    },
    {
        label: '实验室温湿度记录',
        key: 'app',
        icon: <AppstoreOutlined />,
        link: '/tem/humidity',
    },
    {
        label: '成员名单',
        key: 'setting',
        icon: <SettingOutlined />,
        link: '/list/user',
    },
    {
        label: '新增成员',
        key: 'add',
        icon: <SettingOutlined />,
        link: '/add/user',
    },
];

const GuideList = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <BrowserRouter>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
                {items.map((item) => (
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={item.link}>{item.label}</Link>
                    </Menu.Item>
                ))}
            </Menu>
            <Routes>
                <Route path="/list/user" element={<ListUser />} />
                <Route path="/create" element={<CreateUser />} />
                <Route path="/inout/list" element={<InOutList />} />
                <Route path="/add/user" element={<CreateUser />} />
                <Route path="/tem/humidity" element={<TemHumidity />} />
                <Route path="/user/:id/edit" element={<EditUser />} />

            </Routes>
        </BrowserRouter>
    );
};

export default GuideList;
