import React from 'react';
import './styles.scss'

interface UserPictureProps {
    className: string;
    img: string;
    alt: string;
}

export default class UserPicture extends React.Component<UserPictureProps> {
    render() {
        return (
            <img
                className={this.props.className}
                src={this.props.img}
                alt={this.props.alt}
            /> 
        )
    }
}
