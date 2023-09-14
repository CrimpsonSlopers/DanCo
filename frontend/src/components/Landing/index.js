import React from "react";

import Box from '@mui/material/Box';
import { Button, Grid, Typography } from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { styled } from "@mui/material/styles";

export default function Landing() {
    const Heading = styled(Typography)(({ theme }) => ({
        color: "#f5f6f7",
        fontWeight: 900,
        lineHeight: 1,
        [theme.breakpoints.down("md")]: {
            textAlign: "center",
            fontSize: "3rem",
        },
        [theme.breakpoints.up("md")]: {
            fontSize: "4rem",
        },
    }));

    return (
        <Box sx={{
            backgroundImage: `url(/static/images/landing.jpg)`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',
        }} >
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                height={"100%"}
            >
                <Grid item xs={8}>
                    <Typography variant="h2" fontWeight={"bold"} color="white">
                        <Heading>POWERING</Heading>
                    </Typography>
                    <Typography variant="h2" fontWeight={"bold"} color="white">
                        <Heading>AUTOMATED</Heading>
                    </Typography>
                    <Typography variant="h2" fontWeight={"bold"} color="white" pb={2}>
                        <Heading>SOLUTIONS</Heading>
                    </Typography>
                    <Button variant="outlined" color="white" endIcon={<ArrowRightAltIcon />}>Learn More</Button>
                </Grid>
            </Grid>
        </Box>
    )
}