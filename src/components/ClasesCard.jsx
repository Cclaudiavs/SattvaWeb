
import { useState } from "react";
import PropTypes from 'prop-types';

const ClasesCard = ({ image, title, description }) => {
    const [flipped, setFlipped] = useState(false);

    const handleCardClick = () => {
        setFlipped(!flipped);
    };

    return (
        <div className={`card ${flipped ? 'flipped' : ''}`} onClick={handleCardClick}>
            <div className="card-inner">
                <div className="card-front">
                    <img src={image} alt={title} style={{ width: '100%', height: 'auto', objectfit: 'cover' }} />
                </div>
                <div className="card-back">
                    <div className="content">
                        <h3>{title}</h3>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

ClasesCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default ClasesCard;