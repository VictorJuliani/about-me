import React, { useState } from 'react';
import { useParams, Redirect } from 'react-router';
import { connect } from 'react-redux';
import { Card } from 'antd';
import { UsersState, getUser, likeUser } from '../../../store';
import UserInfo from '../user-info';
import UserAbout from '../user-about';
import { User } from '../../../models';
import './styles.scss';
import LikeButton from '../../widgets/like';

interface UserProfileProps {
    user: User | undefined;
    like: (user: User) => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, like }) => {
    const [liked, setLiked] = useState(false);
    const handleLike = () => {
        like(user as User);
        setLiked(true);
    };

    return !user
        ? <Redirect to="/" />
        : (
            <div className="container">
                <Card className="user-card">
                    <UserInfo user={user} />
                    <UserAbout user={user} />
                    <LikeButton onClick={handleLike} disabled={liked} />
                </Card>
            </div>
        )
}

const mapStateToProps = (state: UsersState, ownProps: any) => ({
    user: getUser(state, ownProps.userId)
});

const mapDispatchToProps = {
    like: (user: User) => likeUser(user)
};

const ConnectedUserProfile = connect(mapStateToProps, mapDispatchToProps)(UserProfile);

const UserProfileRouted: React.FC = () => {
    let { userId } = useParams();

    return (
        <ConnectedUserProfile userId={Number(userId)} />
    )
};

export default UserProfileRouted;