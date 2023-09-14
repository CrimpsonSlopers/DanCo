import React, { useEffect, useState } from "react";

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';

import { theme } from "theme";
import { Box } from "@mui/material";

const navItems = ['About Us', 'Products', 'Events', 'Location', 'Contact Us'];


export default function Footer({ handleClick }) {

    return (
        <Box sx={{ backgroundColor: theme.palette.primary.main }}>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={5}
                py={5}
            >
                <Grid item xs={12} md={4}>
                    <Typography variant="h3" fontWeight="bold" color={theme.palette.secondary.main}>
                        DanCo Systems
                    </Typography>
                </Grid>
                <Grid item xs={6} md={4}>
                    <List>
                        <ListItem key={0} disablePadding >
                            <Box width="100%" sx={{ textAlign: 'center' }}>
                                <Typography variant="h6" fontWeight="bold" color={theme.palette.secondary.main} sx={{ pb: 2 }}>
                                    Quick Links
                                </Typography>
                            </Box>
                        </ListItem>
                        {navItems.map((item) => (
                            <ListItem key={item} disablePadding>
                                <ListItemButton sx={{ textAlign: 'center', color: theme.palette.light.main }} onClick={(event) => handleClick(item)}>
                                    <ListItemText primary={item} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Grid>
            </Grid >
        </Box>
    )
}