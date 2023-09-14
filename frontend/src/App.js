import React, { useState, useRef } from 'react';
import { ThemeProvider } from "@mui/material/styles";
import { Routes, Route } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { theme } from "theme";

import Landing from 'components/Landing';
import About from './components/About';
import { Container } from '@mui/material';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

const drawerWidth = 240;
const navItems = ['About Us', 'Products', 'Events', 'Contact Us'];

function Main() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const contactAnchor = useRef(null);
    const aboutAnchor = useRef(null);
    const productsAnchor = useRef(null);
    const eventsAnchor = useRef(null);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleClick = (item) => {
        if (item == "About Us") {
            aboutAnchor.current?.scrollIntoView({ behavior: 'smooth' });
        } else if (item == "Products") {
            productsAnchor.current?.scrollIntoView({ behavior: 'smooth' });
        } else if (item == "Events") {
            eventsAnchor.current?.scrollIntoView({ behavior: 'smooth' });
        } else if (item == "Contact Us") {
            contactAnchor.current?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                DanCo Systems
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} onClick={(event) => handleClick(item)}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar component="nav" background={"transparent"}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            DanCo Systems
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map((item) => (
                                <Button key={item} sx={{ color: '#fff' }} onClick={(event) => handleClick(item)}>
                                    {item}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
                <nav>
                    <Drawer
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </nav>
                <Landing />
            </Box >
            <About aboutAnchor={aboutAnchor} />
            <Products productAnchor={productsAnchor} />
            <Contact contactAnchor={contactAnchor} />
            <Footer handleClick={handleClick} />
        </>
    )

}

export default function App() {

    return (

        <ThemeProvider theme={theme}>
            <Routes>
                <Route index element={<Main />} />
            </Routes>
        </ThemeProvider>
    );
}


