
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const Contacto = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    }

    return (
        <div className="contact-container">
            <div className="background-image"></div>
            <h2>Contacto</h2>
            <p>Para más información, contáctanos a través de:</p>
            <p>
                Teléfono: <a href="https://wa.me/54280415352273" target="_blank" rel="noopener noreferrer">280-4(15)352273</a>
            </p>
            <p>
                Email: <a href="mailto:sattva.yoga.rw@gmail.com">sattva.yoga.rw@gmail.com</a>
            </p>
            <p>Dirección: Playa Unión, Chubut.</p>
            <Button variant="contained" color="primary" onClick={handleBackClick}>
                Regresar
            </Button>
        </div>
    );
};

export default Contacto;


