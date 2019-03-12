import React from 'react'; 

class TextBlock extends React.Component {

    async componentDidMount() {
        await this.props
    }
    render () {
        return (
            <div className={this.props.className}>
                {this.props.text}
            </div>
        );
    }
}

export default TextBlock