import {useContext} from 'react';
import{Link} from 'react-router-dom';
import{Box,Button,Flex,Spacer,Text} from '@chakra-ui/react';
import{AuthContext} from '../App';
const NavBar =() =>{
    const {authState, setAuthState}=useContext(AuthContext);
    const handleLogout=()=>{
        setAuthState({ isAuthenticated:false, token:null, email:null});
    };
    return(
        <Box bg="red" p={4} color="white">
        <Flex>
        {
            authState.isauthenticated ? (
                <>
                <Text>{authState.email}</Text>
                <Spacer/>
                <Link to="/Home">
                    <Button>Home</Button>
                    </Link>
                    <button>Logout</button>
                    </>
            ):(
                <Link to="/login">
                    <Button>Login</Button>
                    </Link>
            )
        }
        </Flex>
        </Box>
    );
};
export default NavBar;
