import React from 'react';
import { useParams, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { UsersState, getUser } from '../../../store';
import UserInfo from '../user-info';
import UserAbout from '../user-about';
import { User } from '../../../models';
import './styles.scss';

interface UserProfileProps {
    user: User | undefined;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
    return !user
        ? <Redirect to="/" />
        : (
            <div className="container">
                <div className="user-card">
                    <UserInfo user={user} />
                    <UserAbout user={user} />
                </div>
            </div>
        )
}

const mapStateToProps = (state: UsersState, ownProps: any) => ({
    user: getUser(state, ownProps.userId)
});

const ConnectedUserProfile = connect(mapStateToProps)(UserProfile);

const UserProfileRouted: React.FC = () => {
    let { userId } = useParams();

    return (
        <ConnectedUserProfile userId={Number(userId)} />
    )
};

export default UserProfileRouted;