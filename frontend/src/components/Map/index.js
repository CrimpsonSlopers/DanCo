import React, { useEffect, useState } from "react";


import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';

import { theme } from "theme";
import { Box } from "@mui/material";


export default function Map() {

    return (<Box sx={{
        backgroundImage: `url(/static/images/map.png)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
    }} >
    </Box>
    )
}