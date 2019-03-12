import React from 'react';
import Carousel from 'nuka-carousel';
import BlenderWithCups from '../imgs/blender_with_cups.png';
import WomanPouringDetoxDrink from '../imgs/woman_pouring_detox_drink.png';

class NewCarousel extends React.Component {


    async componentDidMount() {
        await this.props
        this.setState({loaded: true})
    }

    render() {
        let { images } = this.props;

        if (images.length <= 1) {
            images.push(
                {image: BlenderWithCups},
                {image: WomanPouringDetoxDrink}
            )
        }
        //TODO: key needs to be more unique
        return (
            <Carousel
                width="300px"
                heightMode="first"
                >
                {images.map(image => {
                    return <img key={image.image} src={image.image} />
                })}
            </Carousel>
        )
    }
}



export default NewCarousel