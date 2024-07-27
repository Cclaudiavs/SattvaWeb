

/*function Clases() {
    return (
        <div>
            <h1>Sobre las Clases</h1>
            <p>Información detallada sobre las clases ofrecidas en Sattva.</p>
        </div>
    );
}

export default Clases;*/
// El contenido del archivo se muestra a continuación


import { Button, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ClasesCard from './ClasesCard';

const Clases = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/'); // Navegar a la página de inicio
    };


    const classesData = [
        {
            styleName: 'Hatha Yoga',
            description: 'El Hatha Yoga es un estilo de yoga que se centra en posturas y técnicas de respiración para mejorar la flexibilidad y la calma mental.',
            imageUrl: 'src/img/hatha.jpg'
        },
        {
            styleName: 'Vinyasa Yoga',
            description: 'El Vinyasa Yoga es un estilo dinámico que se centra en la fluidez del movimiento y la respiración sincronizada.',
            imageUrl: 'src/img/vinyasa.jpg'
        },
        {
            styleName: 'Yin Yoga',
            description: 'El Yin Yoga se centra en estiramientos profundos y la relajación para mejorar la flexibilidad y la paz interior.',
            imageUrl: 'src/img/yin.jpg'
        },
        // Agrega más estilos de yoga si es necesario
    ];


    return (
        <Container>
            <Box mb={2}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleBackClick}
                >
                    Regresar
                </Button>
            </Box>



            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
                {classesData.map((clase, index) => (
                    <ClasesCard
                        key={index}
                        styleName={clase.styleName}
                        description={clase.description}
                        imageUrl={clase.imageUrl}
                    />

                ))}

            </div>

        </Container>

    );
};

export default Clases;


