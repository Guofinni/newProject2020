import React, { Component } from 'react';
import {setCookie} from "../../helpers/cookies";
import '../../style/login.less';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Input, Button, Checkbox, message, Spin, Form } from 'antd';
const FormItem = Form.Item;

const client_id = 'b7f8065ab0c7188c2a21';
const authorize_uri = 'https://github.com/login/oauth/authorize';
const redirect_uri = 'http://localhost:8080/oauth/redirect';

const users = [{
    username:'admin',
    password:'admin'
},{
    username:'guojiafen',
    password:'123456'
}];

function PatchUser(values) {  //匹配用户
    const {username, password} = values;
    return users.find(user => user.username === username && user.password === password);
}

class Login extends Component {
    state = {
        isLoding:false,
    };
    handleSubmit = (values) => {
        console.log('Received values of form: ', values);
        if(PatchUser(values)){
            this.setState({
                isLoding: true,
            });

            setCookie('mspa_user',JSON.stringify(values));
            message.success('login successed!'); //成功信息
            let that = this;
            setTimeout(function() { //延迟进入
                that.props.history.push({pathname:'/app',state:values});
            }, 2000);

        }else{
            message.error('login failed!'); //失败信息
        }
    };

    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    render() {
        return this.state.isLoding ? <Spin size="large" className="loading" /> :
        <div className="login">
            <div className="login-form">
                <div className="login-logo">
                    <div className="login-name">MSPA</div>
                </div>
                <Form
                    style={{maxWidth: '300px'}}
                    initialValues={{ remember: true }}
                    onFinish={this.handleSubmit}
                    onFinishFailed={this.onFinishFailed}
                >
                    <FormItem
                        name="username"
                        rules={[{ required: true, message: '请输入用户名!' }]}
                    >
                        <Input prefix={<UserOutlined style={{ fontSize: 13 }} />} placeholder="用户名 (admin)" />
                    </FormItem>
                    <FormItem
                        name="password"
                        rules={[{ required: true, message: '请输入密码!' }]}
                    >
                        <Input prefix={<LockOutlined style={{ fontSize: 13 }} />} type="password" placeholder="密码 (admin)" />
                    </FormItem>
                    <FormItem style={{marginBottom:'0'}}>
                        <Checkbox>记住我</Checkbox>
                        <a className="login-form-forgot" href="" style={{float:'right'}}>忘记密码?</a>
                        <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
                            登录
                        </Button>
                        Or <a href="">现在就去注册!</a>
                    </FormItem>
                </Form>
                <a className="githubUrl" href={`${authorize_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}`}> </a>
            </div>
        </div>;
    }
}

export default Login;