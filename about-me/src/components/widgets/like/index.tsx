import React from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';

interface LikeButtonProps {
    onClick?: () => void;
}

export default class LikeButton extends React.PureComponent<LikeButtonProps & ButtonProps> {
    
    render() {
        return <Button
            shape="circle"
            size="large"
            icon="like"
            disabled={this.props.disabled}
            onClick={this.props.onClick}
        />
    }

}