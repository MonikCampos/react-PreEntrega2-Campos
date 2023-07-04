import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    IconButton,
    Typography,
} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const ProductCard = ({ item }) => {
    return (
        <Card sx={{ width: 445, backgroundColor: "#BFA4B3" }}>
            <CardMedia sx={{ height: 440 }} image={item.img} title={item.title} />
            <CardContent sx={{  backgroundColor: "#BFA4B3" }}>
                <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.brand} - {item.category}
                </Typography>
            </CardContent>
            <CardActions sx={{  backgroundColor: "#BFA4B3" }}>
                <Button sx={{  color: "#F2CEDB", border:"none", backgroundColor: "#0E2940" }} size="small" variant="contained">
                    Ver detalle
                </Button>
                <IconButton sx={{  color: "#0E2940" }} aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
