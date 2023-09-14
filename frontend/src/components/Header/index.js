import React from "react"

import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

export default function SectionHeader({ title, subheader }) {
    return (
        <Box>
            <Typography variant="h3" fontWeight="bold" sx={{ pb: 1 }}>
                {title}
            </Typography>
            <Typography variant="body1" fontWeight="bold" sx={{ color: '#ff6f00', textTransform: "uppercase" }}>
                {subheader}
            </Typography>
        </Box>

    )
}