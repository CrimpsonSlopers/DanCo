import React from 'react';
import SectionHeader from "components/Header";
import AddLocationIcon from '@mui/icons-material/AddLocation';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import Grid from '@mui/material/Grid';
import PhoneIcon from '@mui/icons-material/Phone';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { theme } from "theme";
import { Container } from '@mui/material';


export default function Contact({ contactAnchor }) {
    return (
        <Container ref={contactAnchor}>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={5}
                py={5}
                mb={"50px"}
                sx={{
                    backgroundColor: 'transparent'
                }}
            >
                <Grid item xs={12}>
                    <Typography variant="h3" fontWeight="bold" color={theme.palette.secondary.main} sx={{ pb: 2, ml: 10 }}>
                        Get in Touch
                    </Typography>
                </Grid>
                <Grid item xs={12} md={9} lg={6} p={3}>
                    <Grid container spacing={1}>
                        <Grid xs={12} sm={6} item>
                            <TextField
                                label="First Name"
                                variant="outlined"
                                fullWidth
                                margin="dense"
                                size="small"
                            />
                        </Grid>
                        <Grid xs={12} sm={6} item>
                            <TextField
                                label="Last Name"
                                variant="outlined"
                                fullWidth
                                margin="dense"
                                size="small"
                            />
                        </Grid>
                        <Grid xs={12} sm={6} item>
                            <TextField
                                label="Email"
                                variant="outlined"
                                fullWidth
                                margin="dense"
                                size="small"
                            />
                        </Grid>
                        <Grid xs={12} sm={6} item>
                            <TextField
                                label="Phone"
                                variant="outlined"
                                fullWidth
                                margin="dense"
                                size="small"
                            />
                        </Grid>
                        <Grid xs={12} sm={6} item>
                            <TextField
                                label="Company"
                                variant="outlined"
                                fullWidth
                                margin="dense"
                                size="small"
                            />
                        </Grid>
                        <Grid xs={12} sm={6} item>
                            <TextField
                                label="Product Interest"
                                variant="outlined"
                                fullWidth
                                margin="dense"
                                size="small"
                            />
                        </Grid>
                        <Grid xs={12} item>
                            <TextField
                                label="Message"
                                variant="outlined"
                                fullWidth
                                multiline
                                rows={4}
                                margin="dense"
                                size="small"
                            />
                        </Grid>
                        <Grid xs={12} item>
                            <Button variant="contained" color="primary" sx={{ px: '60px', py: '10px' }}>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid xs={12} md={9} lg={6} height={"500px"} item>
                    <Box sx={{ width: "100%", height: "100%", backgroundColor: "#425066", px: 10, py: 6 }}>
                        <Stack
                            height={"100%"}
                            direction="column"
                            justifyContent="center"
                            alignItems="flex-start"
                            spacing={2}
                        >
                            <Typography variant="h4" fontWeight="bold" sx={{ pb: '50px', color: theme.palette.light.main }}>
                                Contact Us
                            </Typography>
                            <Grid container direction="row" alignItems="center">
                                <Grid item>
                                    <AddLocationIcon sx={{ fontSize: 30, mr: '10px', color: theme.palette.light.main }} />
                                </Grid>
                                <Grid item>
                                    <Typography sx={{ pb: '10px', color: theme.palette.light.main }}>
                                        <a href='http://maps.google.com/?q=11101 JOHNSON DR, SHAWNEE, KS 66203' target="_blank" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>11101 JOHNSON DR, SHAWNEE, KS 66203</a>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container direction="row" alignItems="center">
                                <Grid item>
                                    <EmailIcon sx={{ fontSize: 30, mr: '10px', color: theme.palette.light.main }} />
                                </Grid>
                                <Grid item>
                                    <Typography sx={{ pb: '10px', color: theme.palette.light.main }}>
                                        <a style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
                                            jrhawktwo@gmail.com
                                        </a>
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container direction="row" alignItems="center">
                                <Grid item>
                                    <PhoneIcon sx={{ fontSize: 30, mr: '10px', color: theme.palette.light.main }} />
                                </Grid>
                                <Grid item>
                                    <Typography sx={{ pb: '10px', color: theme.palette.light.main }}>
                                        <a href='tel:9136899236' style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
                                            (913) 689 9236
                                        </a>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Stack>
                    </Box>
                </Grid>
            </Grid >
        </Container>
    )
}