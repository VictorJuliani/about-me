import React from 'react';
import './styles.scss';

interface UserDetailsProps {
    className: string;
    name: string;
    job: string;
}

export default class UserDetails extends React.Component<UserDetailsProps> {

    render() {
        return (
            <div className={this.props.className}>
                <h1 className="user-name">{this.props.name}</h1>
                <span className="user-job">{this.props.job}</span>
            </div>
        )
    }

}
