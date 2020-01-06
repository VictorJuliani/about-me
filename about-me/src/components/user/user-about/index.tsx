import React from 'react';
import UserRepo from '../user-repo';
import UserDescription from '../user-description';
import { User } from '../../../models';
import './styles.scss';

interface UserAboutProps {
    user: User;
}

export default class UserAbout extends React.Component<UserAboutProps> {

    render() {
        return (
            <div className="user-about">
                <div>
                    <UserRepo repo={this.props.user.repo} />
                    <UserDescription
                        className="user-description"
                        description={this.props.user.description}
                    />
                </div>
            </div>
        )
    }

}
