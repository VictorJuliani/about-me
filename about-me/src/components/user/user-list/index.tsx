import React from 'react';
import { connect } from 'react-redux';
import { getUsers, UsersState } from '../../../store';
import { User } from '../../../models';
import './styles.scss';
import { Link } from 'react-router-dom';

interface UserListProps {
    users: User[];
}

class UserList extends React.Component<UserListProps> {
    render() {
        const users = this.props.users;
        return (
            <ul>
                {
                    users.map(u =>
                        <li key={u.id}><Link to={`/users/${u.id}`}>{u.name}</Link></li>
                    )
                }
            </ul>
        );
    }
}

const mapStateToProps = (state: UsersState) => {
    return {
        users: [ ...getUsers(state) ]
    }
}

export default connect(mapStateToProps)(UserList);
