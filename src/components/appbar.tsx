"use client"
import * as React from 'react';
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
import Link from 'next/link';

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{backgroundColor: "rgba(255, 255, 255, 0.12)"}}>
            <Container maxWidth="xl">
                <Toolbar sx={{justifyContent: 'space-between'}}>
                    <Box>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="basic-menu"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            sx={{ mr: 2 }}
                            onClick={handleClick}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Menu
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>
                                <Link href={"/dashboard"}>Dashboard</Link>
                            </MenuItem>
                        </Menu>
                    </Box>
                    
                    <Button href="/login" color="inherit">Login</Button>
                </Toolbar>
            </Container>
        </AppBar>
    </Box>
  );
}