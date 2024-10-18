
import { Toolbar, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logoIMG from '../img/logoSattva.png';

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className="header">
            <Toolbar>
                <img src={logoIMG} alt="sattva" className="logo" />
                <Typography variant="h4" className="title">
                    Sattva YogaWeb
                </Typography>
                <Button
                    sx={{
                        textDecoration: 'underline',
                        color: '#4B0082'  // Color violeta oscuro
                    }}
                    onClick={() => navigate('/Sattva')}
                >
                    Sattva
                </Button>
                <Button
                    sx={{
                        textDecoration: 'underline',
                        color: '#4B0082'  // Color violeta oscuro
                    }}
                    onClick={() => navigate('/clases')}
                >
                    Clases
                </Button>
                <Button
                    sx={{
                        textDecoration: 'underline',
                        color: '#4B0082'  // Color violeta oscuro
                    }}
                    onClick={() => navigate('/clases-online')}
                >
                    Clases Online
                </Button>
                <Button
                    sx={{
                        textDecoration: 'underline',
                        color: '#4B0082'  // Color violeta oscuro
                    }}
                    onClick={() => navigate('/contactos')}
                >
                    Contactos
                </Button>
                <Button
                    sx={{
                        textDecoration: 'underline',
                        color: '#4B0082',  // Color violeta oscuro
                        marginLeft: 'auto'  // Empuja el botón a la derecha
                    }}
                    onClick={() => navigate('/login')}
                >
                    Login
                </Button>
            </Toolbar>
        </div>
    );
};

export default Header;

