import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import "./ProductCard.css";

const ProductCard = ({ item }) => {
    return (
        <Card sx={{ width: 345 }}>
            <CardMedia sx={{ height: 440 }} image={item.img} title="green iguana" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.brand} - {item.category}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="contained">
                    Ver detalle
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
