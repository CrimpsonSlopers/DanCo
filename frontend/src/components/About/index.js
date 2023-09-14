import React, { useEffect, useState } from "react";


import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { theme } from "theme";
import { Card, Container } from "@mui/material";
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
    transition: 'background-color 1s, color 1s',
    height: "100%",
    '&:hover': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiCardHeader-title': {
            color: theme.palette.light.main,
        },
        '& .MuiCardContent-root': {
            color: 'white',
        },
    },
}));

export default function About({ aboutAnchor }) {
    const [aboutData, setAboutData] = useState([]);

    useEffect(() => {
        const getSessions = async () => {
            try {
                const response = await fetch(`/api/about`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }
                });
                if (response.status === 200) {
                    const data = await response.json();
                    setAboutData(data);
                } else {
                    throw new Error(`Unexpected response status: ${response.status}`);
                }
            } catch (err) {
                console.error(err);
            }
        };
        getSessions();
    }, []);

    return (
        <Container>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={5}
                py={"50px"}
                mb={"50px"}
                ref={aboutAnchor}
            >
                <Grid item xs={12}>
                    <Typography variant="h3" fontWeight="bold" color={theme.palette.secondary.main} sx={{ pb: 2, ml: 10 }}>
                        About Us
                    </Typography>
                </Grid>
                {aboutData.map((item, index) => (
                    <Grid item xs={12} md={4} key={index} >
                        <StyledCard variant="outlined">
                            <CardHeader
                                title={item.headline}
                            />
                            <CardContent >
                                {item.body1}
                            </CardContent>
                            <CardContent >
                                {item.body2}
                            </CardContent>
                        </StyledCard>
                    </Grid>
                ))}
            </Grid >

        </Container>
    )
}