import React from 'react';
import Button from '../../button';
import styles from './styles.module.scss';

interface UserRepoProps {
    repo: string;
}

export default class UserRepo extends React.Component<UserRepoProps> {

    render() {
        return (
            <a href={this.props.repo} target="_blank" rel="noopener noreferrer">
                <Button className={`btn-purple ${styles['user-repo-btn']}`}>
                    &lt;/&gt; View my repo
                </Button>
            </a>
        )
    }

}