import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import CategoryIcon from '@mui/icons-material/Category';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),

        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));
// eslint-disable-next-line react/prop-types
const Header = ({ electronics }) => {
    const navigate = useNavigate()
    return (
        <div >
            <AppBar position="static">
                <Toolbar>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        E Commerce App
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    <Button color="inherit" onClick={() => navigate("/")}> Home</Button>
                    <Button color="inherit" onClick={() => navigate("/about")}> About</Button>
                    <Button color="inherit" onClick={() => navigate("/shop")}> Shop</Button>
                    {/* <Button color="inherit"><CategoryIcon />Categories</Button> */}
                    {/* <Button color="inherit"><AccountCircleIcon /> Login</Button> */}
                    {/* eslint-disable-next-line react/prop-types */}
                    <Button color="inherit"><ShoppingCartIcon />{electronics.length === 0 ? 0 : electronics.length}</Button>
                    {/* <Button color="inherit"><PersonIcon />My Profile</Button> */}
                </Toolbar>
            </AppBar>
        </div>
    );
};
export default Header;
