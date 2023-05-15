/*
 * @Author: dengminchuan 1755875003@qq.com
 * @Date: 2023-05-01 23:03:43
 * @LastEditors: dengminchuan 1755875003@qq.com
 * @LastEditTime: 2023-05-02 21:59:48
 * @FilePath: \stream\src\pages\streamBI\NewPage.js
 * @Description:
 */

import React from "react";
import {PageContainer} from "@ant-design/pro-layout";
import {Card} from "antd";

import { Table, Tag, Space } from 'antd';

// @ts-ignore
// @ts-ignore
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

class Index extends React.Component {
    render() {
        return <div>
            <PageContainer>
                <Card>
                    <Table columns={columns} dataSource={data} />
                </Card>
            </PageContainer>
        </div>
    }
}

export default Index;
