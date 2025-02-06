import { Box, Typography } from "@mui/material";

export default function ProjectSettings()
{
    return(
        <>
            <Box sx={{width: "100%", height: "42rem", marginLeft: "6rem"}}>
                <Box sx={{display: "flex", mb: "1.5rem"}}>
                    <Typography variant="h4" sx={{marginRight: "auto"}}>
                        Project Settings
                    </Typography>
                </Box>
            </Box>
        </>
    );
}