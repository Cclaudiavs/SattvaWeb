import { useState } from "react";
import PropTypes from 'prop-types'; // Importa PropTypes


const ClasesCard = ({ image, title, description }) => {
    const [flipped, setFlipped] = useState(false);

    const handleCardClick = () => {
        setFlipped(!flipped);
    };


    return (
        <div className={`card ${flipped ? 'flipped' : ''}`} onClick={handleCardClick}>
            <div className="card-inner">
                <div className="card-front">
                    <img src={image} alt={title} />
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
    image: PropTypes.string.isRequired,  // Asegúrate de que image es una cadena y es obligatoria
    title: PropTypes.string.isRequired,  // Asegúrate de que title es una cadena y es obligatoria
    description: PropTypes.string.isRequired,  // Asegúrate de que description es una cadena y es obligatoria
};

export default ClasesCard;
