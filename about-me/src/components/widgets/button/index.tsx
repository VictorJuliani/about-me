import React from 'react';

interface ButtonProps {
    className: string;
    onClick?: (e: React.MouseEvent) => void
}

export default class Button extends React.Component<ButtonProps> {
    render() {
        return <button
            className={`btn ${this.props.className}`}
            onClick={this.props.onClick}
        >
            {this.props.children}
        </button>
    }
}
