import React from 'react';
import Carousel from 'nuka-carousel';

class NewCarousel extends React.Component {


    async componentDidMount() {
        await this.props
        this.setState({loaded: true})
    }

    render() {
        const { images } = this.props;
        //TODO: key needs to be more unique
        return (
            <Carousel>
                {images.map(image => {
                    return <img key={image.image} src={image.image} />
                })}
            </Carousel>
        )
    }
}



export default NewCarousel