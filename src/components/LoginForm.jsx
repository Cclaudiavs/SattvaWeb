
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from "../firebase/firebaseConfig";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth';
import { Button, TextField, Box, Typography } from '@mui/material';


function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegister, setIsRegister] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleEmailAuth = async () => {
        try {
            if (isRegister) {
                await createUserWithEmailAndPassword(auth, email, password);
            } else {
                await signInWithEmailAndPassword(auth, email, password);
            }
            navigate('/dashboard');
        } catch (error) {
            console.error("Error en la autenticación:", error);
            setError("Correo o contraseña incorrectos. Inténtalo de nuevo.");
        }
    };

    const handleGoogleAuth = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            navigate('/dashboard');
        } catch (error) {
            console.error("Error con Google Auth:", error);
            setError("Error al iniciar sesión con Google. Inténtalo de nuevo.");
        }
    };

    return (
        <div className="login-form-container">
            <Box className="login-form-box">
                <Typography variant="h5" sx={{ mb: 2, color: '#4B0082' }}>
                    {isRegister ? "Registrarse" : "Iniciar Sesión"}
                </Typography>
                <TextField
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    label="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    fullWidth
                    variant="outlined"
                    margin="normal"
                    type="password"
                    label="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    fullWidth
                    variant="contained"
                    sx={{ backgroundColor: '#4B0082', my: 1 }}
                    onClick={handleEmailAuth}
                >
                    {isRegister ? "Registrarse" : "Iniciar Sesión"}
                </Button>
                <Button
                    fullWidth
                    variant="outlined"
                    sx={{ color: '#4B0082', borderColor: '#4B0082', mb: 1 }}
                    onClick={handleGoogleAuth}
                >
                    Iniciar Sesión con Google
                </Button>
                <Button
                    fullWidth
                    sx={{ textDecoration: 'underline', color: '#4B0082' }}
                    onClick={() => setIsRegister(!isRegister)}
                >
                    {isRegister ? "¿Ya tienes una cuenta? Iniciar sesión" : "¿No tienes una cuenta? Registrarse"}
                </Button>
                {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
            </Box>
        </div>
    );
}

export default LoginForm;

