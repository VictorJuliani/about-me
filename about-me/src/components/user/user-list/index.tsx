import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { List, Avatar, Card, Empty, Button } from 'antd';
import { getUsers, UsersState } from '../../../store';
import { User } from '../../../models';
import './styles.scss';

interface UserListProps {
    users: User[];
}

class UserList extends React.Component<UserListProps> {
    render() {
        const users = this.props.users;
        const placeholder = "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png";
    
        const emptyUsers = (
            <div style={{ textAlign: 'center' }}>
                <Empty></Empty>
                <Button type="primary" style={{ marginTop: 10 }}>
                    <Link to="/users/new">Create User</Link>
                </Button>
            </div>
        );

        const userList = (
            <List
                itemLayout="horizontal"
                dataSource={users}
                renderItem={user => (
                    <Link to={`/users/${user.id}`}>
                        <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src={user.imgs && user.imgs.length ? user.imgs[0] : placeholder} />}
                                    title={user.name}
                                    description={user.job}
                                    />
                        </List.Item>
                    </Link>
                )}
            />
        );

        return (
            <Card>
                { !users.length ? emptyUsers : userList }
            </Card>
        );
    }
}

const mapStateToProps = (state: UsersState) => {
    return {
        users: [ ...getUsers(state) ]
    }
}

export default connect(mapStateToProps)(UserList);
