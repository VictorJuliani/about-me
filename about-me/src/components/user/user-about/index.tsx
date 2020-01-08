import React from 'react';
import Button from '../../widgets/button';
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
                    <a href={this.props.user.repo} target="_blank" rel="noopener noreferrer">
                        <Button className='btn-purple user-repo-btn'>
                            &lt;/&gt; View my repo
                        </Button>
                    </a>
                    <p className="user-description">
                        {this.props.user.description}
                    </p>
                </div>
            </div>
        )
    }

}
