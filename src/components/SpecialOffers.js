import React from 'react';

class SpecialOffersBlock extends React.Component {

    async componentDidMount() {
        await this.props
    }

    render() {
        let { promotions } = this.props.promotions;
        return (
            <div className={this.props.className}>
                {promotions.map(item => {
                    return <div key={item.promotionIdentifier}>
                        {item.Description[0].shortDescription}
                    </div>
                })}
            </div>
        );
    }
}



export default SpecialOffersBlock