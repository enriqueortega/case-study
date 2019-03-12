import React from 'react';
import './SpecialOffers.css';

class SpecialOffersBlock extends React.Component {
    render() {
        const {className, promotions = []} = this.props;
        return (
            <div className={className}>
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