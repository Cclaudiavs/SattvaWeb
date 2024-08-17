

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
            <p>Teléfono: 280-4(15)352273</p>
            <p>Email: sattva.yoga.rw</p>
            <p>Dirección: Playa Unión, Chubut.</p>
            <Button variant="contained" color="primary" onClick={handleBackClick}>
                Regresar
            </Button>
        </div>

    );
};

export default Contacto;

