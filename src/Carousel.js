import React from 'react';
import Carousel from 'nuka-carousel';

class NewCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        }
    }

    async componentDidMount() {
        console.log("this.props", this.props)
        await this.props
        this.setState({loaded: true})
    }

    render() {
        return (
            <Carousel>
                {this.state.loaded ? this.props.images.map(image => {
                    return <img src={image.url} />
                }) : null }
            </Carousel>
        )
    }
}



export default NewCarousel