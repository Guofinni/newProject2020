import React, { Component } from 'react';
import BreadcrumbCustom from '../common/BreadcrumbCustom';
import { MailOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import './index.less';
const SubMenu = Menu.SubMenu;


export default class MIndex extends Component {

    render() {
        return (
            <div>
                <BreadcrumbCustom paths={['首页']}/>
                <Menu mode="horizontal">
                    <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}
   