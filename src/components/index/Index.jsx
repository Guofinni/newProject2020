import React, { Component } from 'react';
import BreadcrumbCustom from '../common/BreadcrumbCustom';
import { SettingOutlined, MailOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import './index.less';
const SubMenu = Menu.SubMenu;


export default class MIndex extends Component {

    render() {
        return (
            <div>
                <BreadcrumbCustom paths={['首页']}/>
                <Menu mode="horizontal">
                    <SubMenu icon={<SettingOutlined />} title="Navigation Three - Submenu">
                        <Menu.ItemGroup title="Item 1">
                            <Menu.Item key="setting:1">Option 1</Menu.Item>
                            <Menu.Item key="setting:2">Option 2</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title="Item 2">
                            <Menu.Item key="setting:3">Option 3</Menu.Item>
                            <Menu.Item key="setting:4">Option 4</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
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
   