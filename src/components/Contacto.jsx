

import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const Contacto = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);
    }
    return (

        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Contacto</h2>
            <p>Para más información, contáctanos a través de:</p>
            <p>Teléfono: 123-456-7890</p>
            <p>Email: contacto@sattva.com</p>
            <p>Dirección: Calle de Yoga, 123, Ciudad</p>
            <Button variant="contained" color="primary" onClick={handleBackClick}>
                Regresar
            </Button>
        </div>

    );
};

export default Contacto;

