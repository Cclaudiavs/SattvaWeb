
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
            title: 'Yoga Integral',
            description: 'El Yoga Integral es una práctica que integra diferentes estilos de yoga, pudiendo incorporar técnicas de respiración y metodos más dinámicos en la práctica o a su vez terapeuticos',
            image: 'src/img/yogaIntegral.jpg'
        },
        {
            title: 'Vinyasa Yoga',
            description: 'El Vinyasa Yoga es un estilo dinámico que se centra en la fluidez del movimiento y la respiración sincronizada.',
            image: 'src/img/vinyasa.jpg'
        },
        {
            title: 'Astanga Yoga',
            description: 'Ashtanga es un estilo dinámico, que trabaja sobre una serie ya establecida, el prácticante va aprendiendo y avanzando a su ritmo, así se le denomina a lapráctica Mysore. En este estilo de yoga la respiracion es una base de atención absoluta',
            image: 'src/img/ashtanga.jpg'
        },
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
                        title={clase.title}
                        description={clase.description}
                        image={clase.image}
                    />
                ))}
            </div>
        </Container>
    );
};

export default Clases;
