import React from 'react';
import UserPicture from '../user-picture';
import UserDetails from '../user-details';
import { User } from '../../../models';
import './styles.scss';

interface UserInfoProps {
    user: User;
}

export default class UserInfo extends React.Component<UserInfoProps> {

    render() {
        return (
            <div className="user-info">
                <UserPicture
                    className="user-picture"
                    img={this.props.user.img}
                    alt="User Picture"
                />
                <UserDetails
                    className="user-details"
                    name={this.props.user.name}
                    job={this.props.user.job}
                />
            </div>
        )
    }

}
