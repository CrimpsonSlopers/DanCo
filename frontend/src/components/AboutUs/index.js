import React from "react";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import { Grid, IconButton } from "@mui/material";
import AddLocationIcon from '@mui/icons-material/AddLocation';
import AppBar from '@mui/material/AppBar';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';



export default function AboutUs() {
    return (
        <Box >
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                pb={"50px"}
            >
                <Grid item xs={4} height={"600px"}>
                    <Box sx={{ width: "100%", height: "100%", px: 10, py: 6 }}>
                        <Typography variant="h4" fontWeight="bold" sx={{ color: '#ff6f00', pb: 5 }}>
                            Our Approach
                        </Typography>
                        <Typography variant="subtitle1" fontWeight="bold" pb={2} color={"#434D5B"} sx={{ fontWeight: 400 }}>
                            The DanCo philosophy is to only represent the highest quality
                            control and instrumentation products has provided us with the
                            best possible product lines.
                        </Typography>
                        <Typography variant="subtitle1" fontWeight="bold" color={"#434D5B"} sx={{ fontWeight: 400 }}>
                            DanCo has maintained a constant growth path even in times of
                            difficulty in the instrumentation and control industry. DanCo
                            maintains over 250 years of combined instrumentation, control systems,
                            and engineering experience that has created a great resource for our customers,
                            the companies we represent, and DanCo.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={4} height={"600px"}>
                    <Box sx={{
                        backgroundImage: `url(/static/images/AboutUs/two.jpg)`, width: "90%", height: "100%",
                    }}>
                    </Box>
                </Grid>

            </Grid >
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                pb={"50px"}
            >
                <Grid item xs={4} height={"600px"}>
                    <Box sx={{
                        backgroundImage: `url(/static/images/AboutUs/three.jpg)`, width: "90%", height: "100%",
                    }}>
                    </Box>
                </Grid>
                <Grid item xs={4} height={"600px"}>
                    <Box sx={{ width: "100%", height: "100%", px: 10, py: 6 }}>
                        <Typography variant="h4" fontWeight="bold" sx={{ color: '#ff6f00', pb: 5 }}>
                            Our Process
                        </Typography>
                        <Typography variant="subtitle1" fontWeight="bold" pb={2} color={"#434D5B"} sx={{ fontWeight: 400 }}>
                            DanCo covers all process control and instrumentation markets
                            including: Power, General Process Industries, Chemical and
                            Petrol Chemical, Automotive, Food & Beverage, Pharmaceutical,
                            Water, and Waste Water. With solutions that support Oil and Gas,
                            Landfills, Land Rigs (Oil) and Manufacturing.
                        </Typography>
                        <Typography variant="subtitle1" fontWeight="bold" color={"#434D5B"} sx={{ fontWeight: 400 }}>
                            DanCo  was established in 1994 and started with the purchase of Process Specialty Sales
                            and the Fluid Components Intl. product line. DanCo quickly added products such as
                            FactoryLink from USDATA and others. In 1998 we moved into our headquarters building at its
                            current location in Shawnee, Kansas.
                        </Typography>
                    </Box>
                </Grid>

            </Grid >
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                pb={"50px"}
            >
                <Grid item xs={4} height={"600px"}>
                    <Box sx={{ width: "100%", height: "100%", px: 10, py: 6 }}>
                        <Typography variant="h4" fontWeight="bold" sx={{ color: '#ff6f00', pb: 5 }}>
                            Our Mission
                        </Typography>
                        <Typography variant="subtitle1" fontWeight="bold" pb={2} color={"#434D5B"} sx={{ fontWeight: 400 }}>
                            DanCo Systems, Inc. is a manufacturer’s representative and supplier
                            of hardware instrumentation and hardware and software process control,
                            data acquisition, and reporting systems.
                        </Typography>
                        <Typography variant="subtitle1" fontWeight="bold" color={"#434D5B"} sx={{ fontWeight: 400 }}>
                            DanCo covers all process control and instrumentation markets including: Power,
                            General Process Industries, Chemical and Petrol Chemical, Automotive, Food &
                            Beverage, Pharmaceutical, Water, and Waste Water. With solutions that support
                            Oil and Gas, Landfills, Land Rigs (Oil) and Manufacturing.

                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={4} height={"600px"}>
                    <Box sx={{
                        backgroundImage: `url(/static/images/AboutUs/two.jpg)`, width: "90%", height: "100%",
                    }}>
                    </Box>
                </Grid>

            </Grid >
        </Box>
    )
}