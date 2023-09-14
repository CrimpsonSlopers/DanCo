import React, { useEffect, useState } from "react";

import Slider from 'react-slick'


import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { theme } from "theme";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Container, Stack } from "@mui/material";

import { styled } from '@mui/system';

// Create a custom styled Container
const CustomContainer = styled(Container)`
  && {
    padding-right: 0!important;
    margin-right: 0!important; /* Remove the right padding */
  }
`;


const sliderSettings = {
    arrows: false,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
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


export default function Products({ productAnchor }) {
    const slider = React.useRef(null);
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        const getSessions = async () => {
            try {
                const response = await fetch(`/api/products`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }
                });
                if (response.status === 200) {
                    const data = await response.json();
                    setProductData(data);
                } else {
                    throw new Error(`Unexpected response status: ${response.status}`);
                }
            } catch (err) {
                console.error(err);
            }
        };
        getSessions();
    }, []);

    const nextSlide = () => {
        slider.current.slickNext();
    };

    const previousSlide = () => {
        slider.current.slickPrev();
    };


    return (
        <Box sx={{ backgroundColor: theme.palette.primary.main, py: "50px", mb: "50px" }} ref={productAnchor}>
            <CustomContainer>
                <Stack direction={"row"} alignItems={"center"} spacing={3}>
                    <Typography variant="h3" fontWeight="bold" color={theme.palette.secondary.main} sx={{ pb: 2, ml: 10 }}>
                        Our Products
                    </Typography>
                    <IconButton onClick={previousSlide} aria-label="delete" size="large">
                        <ArrowBackIcon sx={{ fontSize: 40, color: theme.palette.secondary.main }} />
                    </IconButton>
                    <IconButton onClick={nextSlide} aria-label="delete" size="large">
                        <ArrowForwardIcon sx={{ fontSize: 40, color: theme.palette.secondary.main }} />
                    </IconButton>
                </Stack>
                <Slider ref={slider} {...sliderSettings}>
                    {productData.map((product, index) => {
                        return (
                            <Box sx={{ width: '100%', height: "450px", p: 3 }} key={index}>
                                <Card width="375px" height={"100%"}>
                                    <CardMedia
                                        sx={{
                                            height: 200,
                                            borderRadius: '8px'
                                        }}
                                        image={product.cover_image}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {product.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {product.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button onClick={() => window.open(product.url, '_blank')} size="small">Learn More</Button>
                                    </CardActions>
                                </Card>
                            </Box>
                        )
                    })}
                </Slider>

            </CustomContainer>
        </Box>
    )
}