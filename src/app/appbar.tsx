import MenuIcon from '@mui/icons-material/Menu';
import {
    Container,
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Menu,
    MenuItem
} from '@mui/material';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{backgroundColor: "rgba(255, 255, 255, 0.12)"}}>
            <Container maxWidth="xl">
                <Toolbar sx={{justifyContent: 'space-between'}}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </Container>
        </AppBar>
    </Box>
  );
}