import {useContext, useState} from 'react';
import{useNavigate} from 'react-router-dom';
import{Box,Button,Flex,Spacer,Text} from '@chakra-ui/react';
import{AuthContext} from '../App';
import axios from 'axios';

const LoginPage=()=>{
    const{setAuthState}= useContext(AuthContext);
    const [email, setEmail] = useState('');
    const[password, setPassword]=useState('');
    const[error, setError]=useState('');
    const navigate = useNavigate();

    const handleLogin = async() =>{
        try{
            const response = await axios.post('https://peerabduljabbar.notion.site/Login-User-d0297e2e8f034e0981d1262d2217d745',{email,password});
            setAuthState({isAuthenticated: true: response.data.token, email});
            navigate('/home');

        }catch(err){
            setError('Invalid credentials please try again');
        }
    };
    return(
        <Box maxW="sm" mx="auto" mt="10">
            <Stack spacing={4}>
                <Text fontSize="2*1">Login</Text>
                <input placeholder="Email" value={email} onChange={(e) =>setEmail(e.target.value)}></input>
                <input placeholder='Password' value={password} onChange={(e)}></input>
                <button onclick={handleLogin}>Login</button>
            </Stack>
        </Box>
    );
};
export default LoginPage;