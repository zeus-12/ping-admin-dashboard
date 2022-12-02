import {Card, CardActionArea, CardActions, CardContent, Button, Typography, Divider, Box} from '@mui/material';
import { LocationOn as LocationIcon } from '@mui/icons-material';

const RequestCard = ({request, index, selectedRequestIndex, setSelectedRequestIndex}) => {
    const handleReqCardClick = () => {
        setSelectedRequestIndex(index);
    };

    const handleResolveBtnClick = () => {
        console.log("Resolve button clicked");
    };

    return (
        <Card sx={{ border: selectedRequestIndex === index ? "2px solid" : "", borderColor: "primary.main", width: "100%"}}>
            <CardActionArea onClick={handleReqCardClick}>
                <CardContent>
                    <h1 gutterBottom variant="h6" component="h6">
                        <LocationIcon sx={{ mr: 1 }} color="error" /> {request.label}
                    </h1>
                    <Typography variant="body2" color="text.secondary">
                        {"29/09/2021 12:00:00"}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Divider />
            <CardActions>
            <Box sx={{ backgroundColor: "primary.main", color: "white", borderRadius: "5px", width: "100%", textAlign: "center" }}>
                <Button size="small" color="primary" variant="contained" fullWidth onClick={handleResolveBtnClick}> Resolve </Button>
            </Box>
            </CardActions>
        </Card>
    );
}

export default RequestCard;