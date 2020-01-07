import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import {
    Menu as AntMenu,
    Icon,
} from 'antd';

export default withRouter(props => {
    const { location } = props;
    return (
        <AntMenu
            theme="dark"
            style={{ lineHeight: '64px' }}
            mode="horizontal"
            selectedKeys={[location.pathname]}
        >
            <AntMenu.Item key="users">
                <Link to="/">
                    <Icon type="user" />
                    Users
                </Link>
            </AntMenu.Item>
            <AntMenu.Item key="create">
                <Link to="/users/new">
                    <Icon type="user-add" />
                    Create User
                </Link>
            </AntMenu.Item>
        </AntMenu>
    );
});