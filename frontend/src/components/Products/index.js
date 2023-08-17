import React from "react";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Slider from 'react-slick'
import { Grid, IconButton } from "@mui/material";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ProductList } from "./data";


const sliderSettings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
            },
        },
    ]
}


export default function Products() {
    const slider = React.useRef(null);

    const nextSlide = () => {
        slider.current.slickNext();
    };

    const previousSlide = () => {
        slider.current.slickPrev();
    };

    slider.current
    return (
        <Box py={"10vh"}>
            <Container >
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    pb={"20px"}
                >
                    <Grid item mr={"30px"}>
                        <Typography variant="h4" fontWeight="bold" sx={{ color: '#425066', pb: 1 }}>
                            Our Products
                        </Typography>
                        <Typography variant="body2" fontWeight="bold" sx={{ color: '#ff6f00' }}>
                            INDUSTRY EXPERTS WE TRUST
                        </Typography>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={previousSlide} aria-label="delete" size="large">
                            <ArrowBackIcon sx={{ fontSize: 40, color: "#ff9100" }} />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton onClick={nextSlide} aria-label="delete" size="large">
                            <ArrowForwardIcon sx={{ fontSize: 40, color: "#ff9100" }} />
                        </IconButton>
                    </Grid>
                </Grid>
            </Container>
            <Slider ref={slider} {...sliderSettings}>
                {
                    ProductList.map((product, index) => {
                        return (
                            <Box sx={{ width: '100%', p: 3 }} key={index}>
                                <CardMedia
                                    sx={{
                                        height: 200,
                                        borderRadius: '8px'
                                    }}
                                    image={product.image}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {product.passage}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={() => window.open(product.href, '_blank')} size="small">Learn More</Button>
                                </CardActions>
                            </Box>
                        )
                    })
                }
            </Slider>
        </Box>
    )
}