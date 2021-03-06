import React from 'react';
import './Button.css'

class Button extends React.Component {
    render() {
        const {text, className, isDisabled} = this.props;
        return (
            <button
                className = {className}
                disabled={ isDisabled === "0" || isDisabled === "1" ? false : true }>
                {text}
            </button>
        );
    }
}



export default Button