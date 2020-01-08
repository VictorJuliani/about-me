import React from 'react';
import UserPicture from '../user-picture';
import { Carousel } from '../../widgets/carousel';
import { User } from '../../../models';
import './styles.scss';

interface UserInfoProps {
    user: User;
}

export default class UserInfo extends React.Component<UserInfoProps> {

    render() {
        return (
            <div className="user-info">
                <Carousel>
                    {
                        this.props.user.imgs.map(img =>
                            <UserPicture
                                className="user-picture"
                                key={img.slice(0, 20)}
                                img={img}
                                alt="User Picture"
                            />
                        )
                    }
                </Carousel>
                <div className="user-details">
                    <h1 className="user-name">{this.props.user.name}</h1>
                    <span className="user-job">{this.props.user.job}</span>
                </div>
            </div>
        )
    }

}
