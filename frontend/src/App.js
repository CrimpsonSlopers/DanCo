import React, { useRef } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { theme } from "./theme";

import AddLocationIcon from '@mui/icons-material/AddLocation';
import AppBar from '@mui/material/AppBar';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import EmailIcon from '@mui/icons-material/Email';
import Grid from '@mui/material/Grid';
import PhoneIcon from '@mui/icons-material/Phone';
import Products from "./components/Products";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AboutUs from "./components/AboutUs";
import { ProductList, EventList } from "./components/Products/data";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import TodayIcon from '@mui/icons-material/Today';


export default function App() {

    const contactUsAnchor = useRef(null);
    const aboutUsAnchor = useRef(null);
    const productsAnchor = useRef(null);
    const eventsAnchor = useRef(null);

    const NavBar = () => {
        return (
            <AppBar sx={{ background: 'transparent', boxShadow: 'none' }}>
                <Toolbar>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                        DanCo Systems
                    </Typography>
                    <Typography variant='body2' component='div' sx={{ marginRight: '20px' }}>
                        <a onClick={() => productsAnchor.current.scrollIntoView()} style={{ color: 'white', textDecoration: 'none', fontWeight: 'light' }}>
                            About Us
                        </a>
                    </Typography>
                    <Typography variant='body2' component='div' sx={{ marginRight: '20px' }}>
                        <a onClick={() => productsAnchor.current.scrollIntoView()} style={{ color: 'white', textDecoration: 'none', fontWeight: 'light' }}>
                            Products
                        </a>
                    </Typography>
                    <Typography variant='body2' component='div' sx={{ marginRight: '20px' }}>
                        <a onClick={() => contactUsAnchor.current.scrollIntoView()} style={{ color: 'white', textDecoration: 'none', fontWeight: 'light' }}>
                            Contact Us
                        </a>
                    </Typography>
                    <Typography variant='body2' component='div' sx={{ marginRight: '20px' }}>
                        <a onClick={() => eventsAnchor.current.scrollIntoView()} style={{ color: 'white', textDecoration: 'none', fontWeight: 'light' }}>
                            News/Events
                        </a>
                    </Typography>
                </Toolbar>

            </AppBar>
        )
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
                minHeight="100%"
                width="100%"
                sx={{ overflowY: "auto" }}
            >
                <NavBar />
                <Box
                    minHeight="75vh"
                    width="100%"
                    mb="75px"
                    sx={{
                        backgroundImage: `url(/static/images/Covers/one.jpg)`,
                        backgroundSize: "cover",
                        backgroundPosition: "top",
                        display: "grid",
                        placeItems: "center",
                    }}
                >
                    <Container>
                        <Grid container item xs={12} md={7} lg={6} flexDirection="column" justifyContent="center">
                            <Typography
                                color="white"
                                mb={3}
                                fontSize="4rem"
                                fontWeight={900}
                                lineHeight={1}
                            >
                                POWERING
                            </Typography>
                            <Typography
                                color="white"
                                mb={3}
                                fontSize="4rem"
                                fontWeight={900}
                                lineHeight={1}
                            >
                                AUTOMATION
                            </Typography>
                            <Typography
                                color="white"
                                mb={3}
                                fontSize="4rem"
                                fontWeight={900}
                                lineHeight={1}
                            >
                                SOLUTIONS
                            </Typography>
                            <Box>
                                <Button variant="contained" sx={{ px: '60px', py: '10px' }} endIcon={<ArrowRightAltIcon />}>Learn More</Button>
                            </Box>
                        </Grid>
                    </Container>
                </Box>
                <AboutUs />
                <Products />
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={6}
                    pb={"200px"}
                >
                    <Grid item xs={4}>
                        <Box pb={6}>
                            <Typography variant="h4" fontWeight="bold" sx={{ color: '#425066', pb: 1 }}>
                                Request a Quote
                            </Typography>
                            <Typography variant="body2" fontWeight="bold" sx={{ color: '#ff6f00' }}>
                                WE WILL GET BACK TO YOU.
                            </Typography>
                        </Box>
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
                    <Grid ref={contactUsAnchor} item xs={4} height={"500px"}>
                        <Box sx={{ width: "100%", height: "100%", backgroundColor: "#425066", px: 10, py: 6 }}>
                            <Stack
                                height={"100%"}
                                direction="column"
                                justifyContent="center"
                                alignItems="flex-start"
                                spacing={2}
                            >
                                <Typography variant="h4" fontWeight="bold" sx={{ pb: '50px', color: "white" }}>
                                    Contact Us
                                </Typography>
                                <Grid container direction="row" alignItems="center">
                                    <Grid item>
                                        <AddLocationIcon sx={{ fontSize: 30, mr: '10px', color: "#ff9100" }} />
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{ pb: '10px', color: "white" }}>11101 JOHNSON DR, SHAWNEE, KS 66203</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container direction="row" alignItems="center">
                                    <Grid item>
                                        <EmailIcon sx={{ fontSize: 30, mr: '10px', color: "#ff9100" }} />
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{ pb: '10px', color: "white" }}>lisa@dancosystems.com</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container direction="row" alignItems="center">
                                    <Grid item>
                                        <PhoneIcon sx={{ fontSize: 30, mr: '10px', color: "#ff9100" }} />
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{ pb: '10px', color: "white" }}>(913) 962 0600</Typography>
                                    </Grid>
                                </Grid>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid >
                <Box height={'200px'}>
                    <Box ml={"15%"} pb={'20px'}>
                        <Typography variant="h4" fontWeight="bold" sx={{ color: '#425066', pb: 1 }}>
                            Upcoming Events
                        </Typography>
                        <Typography variant="body2" fontWeight="bold" sx={{ color: '#ff6f00' }}>
                            BE SURE TO CHECK US OUT
                        </Typography>
                    </Box>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        {EventList.map((product, index) => {
                            return (
                                <Grid item xs={3}>
                                    <Box sx={{ width: '100%', p: 3 }} key={index}>
                                        <CardMedia
                                            sx={{
                                                height: 300,
                                                borderRadius: '8px'
                                            }}
                                            image={product.src}
                                        />
                                        <CardContent>
                                            <Stack
                                                height={"100%"}
                                                direction="column"
                                                justifyContent="center"
                                                alignItems="flex-start"
                                                spacing={2}
                                            >
                                                <Typography gutterBottom variant="h6" color={"#ff6f00"}>
                                                    {product.name}
                                                </Typography>
                                                <Grid container direction="row" alignItems="center">
                                                    <Grid item>
                                                        <EmailIcon sx={{ mr: '10px', color: "#f5f6f7" }} />
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography sx={{ color: "#f5f6f7" }}>{product.date}</Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid container direction="row" alignItems="center">
                                                    <Grid item>
                                                        <PhoneIcon sx={{ mr: '10px', color: "#f5f6f7" }} />
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography sx={{ color: "#f5f6f7" }}>{product.location}</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Stack>
                                        </CardContent>

                                        <CardActions>
                                            <Button onClick={() => window.open(product.href, '_blank')} size="small">Learn More</Button>
                                        </CardActions>
                                    </Box>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Box>
                <Box height={'750px'} backgroundColor={'#425066'}>
                    <Box
                        pt={"500px"}
                        width="100%"
                        height={'500px'}

                    />
                </Box>
                <Box backgroundColor={"#425066"}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        p={3}
                    >
                        <Typography
                            color="white"
                            mb={3}
                            fontSize="4rem"
                            fontWeight={900}
                            letterSpacing={"2px"}
                        >
                            DANCO SYSTEMS
                        </Typography>
                        <Grid item container direction="row" alignItems="center" justifyContent="center" spacing={4}>
                            <Grid item>
                                <Typography variant="body1" sx={{ color: "#ff9100" }}>(913) 962 0600</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" sx={{ color: "#ff9100" }}>lisa@dancosystems.com</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" sx={{ color: "#ff9100" }}>11101 Johnson Dr, Shawnee, KS 66203</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box >
        </ThemeProvider >
    )
}


