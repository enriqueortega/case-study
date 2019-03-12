import React from 'react'; 

class TextBlock extends React.Component {
    render () {
        return (
            <div className={this.props.className}>
                {this.props.text}
            </div>
        );
    }
}

export default TextBlock