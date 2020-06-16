import React, { Component } from 'react';
import { UserOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import history from './history';
import {removeCookie} from "../../helpers/cookies";

const { Header } = Layout;
const SubMenu = Menu.SubMenu;

export default class HeaderCustom extends Component{
    constructor(props){
        super(props);
        this.state = {
            collapsed: props.collapsed,
        }
        this.logout = this.logout.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        //console.log(nextProps);
        this.onCollapse(nextProps.collapsed);
    }
    onCollapse = (collapsed) => {
        this.setState({
            collapsed,
        });
    };
    logout(){
        removeCookie("mspa_user");
        history.push('/login');
    }
    render(){
        return (
            <Header style={{ background: '#fff', padding: 0 }} className="header">
                <span className="trigger" onClick={this.props.toggle}>
                    {
                        this.state.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                    }
                </span>
                <Menu
                    mode="horizontal"
                    style={{ float: 'right' }}
                >
                    <SubMenu 
                        title={<span>
                            <UserOutlined style={{fontSize:16, color: '#1DA57A' }} />{this.props.username}
                        </span>}
                        >
                        <Menu.Item key="logout" style={{textAlign:'center'}} className="logout">
                            <span onClick={this.logout}>logout</span>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </Header>
        );
    }
} 