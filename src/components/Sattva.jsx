
import { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import salonImage1 from '../img/salon1.jpg';
import salonImage2 from '../img/salon2.jpg';
import salonImage3 from '../img/salon3.jpg';
import salonImage3TB from '../img/salon3TB.jpg';
import salonImage4 from '../img/salon4.jpg';
import salonImage5 from '../img/salon5.jpg';
import salonHoy from '../img/salonHoy.jpg';

const Sattva = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const navigate = useNavigate();
    const stories = [
        {
            image: salonImage1,
            text: "En nuestros primeros días, Sattva comenzó como una pequeña idea de crear un espacio de paz y bienestar. Con mucho esfuerzo y dedicación durante la pandemia y por necesidad de la gente , transformamos mi hogar en un un simple salón,refugio para el alma y libertad para la mente."
        },
        {
            image: salonImage2,
            text: "A medida que creció nuestra comunidad, también creció nuestro salón, nos mudamos de Rawson a Playa Unión para crear un salón exclusivo para la práctica de yoga. Y así en nuestras instalaciones podiamos acomodar a más yoguis y ofrecer una variedad de clases y talleres."
        },
        {
            image: salonImage3TB,
            text: "Como nuestra comunidad fue creciendo y la demanda post pandemia con la práctica de yoga era neceria, nos volvimos a mudar para, asi más yoguis podian disfrutar de este nuevo espacio. Era necesario para las personas poder desconectar. "
        },
        {
            image: salonImage3,
            text: "Cada mudanza es un abrazo al crecimiento interno y al lugar que todxs creamos"
        },
        {
            image: salonImage4,
            text: "Hoy en día, Sattva es más que un salón de yoga; es un centro de encuentro para quienes buscan equilibrio y armonía en sus vidas. Nos enorgullece ver cuánto hemos crecido y seguimos comprometidos con nuestra misión."
        },
        {
            image: salonImage5,
            text: "Pasamos por diferente lugares a lo largo de este trayecto, pero siempre tratamos de construir un lugar acogedor para los encuentros, este año volvimos a mudarnos y Sattva hoy es este rinconcito lleno de luz"
        },
        {
            image: salonHoy,
            text: "Nuestro espacio lo construimos a la comodidad del prácticante, Sattva es amor, es compañerismo y sobre todo unión, este lugar es el reflejo de lo que siempre soñe. "
        }
    ];

    const handleImageClick = (index) => {
        setSelectedIndex(index);
    };

    const handleCloseModal = () => {
        setSelectedIndex(null);
    };
    const handleNavigateHome = () => {
        navigate('/');
    };

    return (
        <div className="sattva-container">
            <h1>Bienvenidos a Sattva</h1>
            <Button
                variant="contained"
                color="primary"
                onClick={handleNavigateHome}
                style={{ marginTop: '2rem' }}
            >
                Regresar a Home
            </Button>

            <div className="sattva-gallery">
                {stories.map((story, index) => (
                    <div key={index} className="gallery-item" onClick={() => handleImageClick(index)}>
                        <img
                            src={story.image}
                            alt={`Salón Sattva ${index + 1}`}
                            className="gallery-image"
                        />
                    </div>
                ))}
            </div>
            {selectedIndex !== null && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <img src={stories[selectedIndex].image} alt="Salón Sattva" className="modal-image" />
                        <p className="modal-text">{stories[selectedIndex].text}</p>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Sattva;
