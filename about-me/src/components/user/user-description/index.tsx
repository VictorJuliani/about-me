import React from 'react';

interface UserDescriptionProps {
    className: string;
    description: string;
} 

export default class UserDescription extends React.Component<UserDescriptionProps> {

    render() {
        return (
            <p className={this.props.className}>
                {this.props.description}
            </p>
        )
    }

}
