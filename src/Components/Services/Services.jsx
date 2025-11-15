import { Divider, Grid } from "@material-ui/core";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@material-ui/icons/CheckCircle'; // Added for green check icons
import GiantScreenImage from './../../Assets/Images/giant-screen.webp';
import ConcessionsImage from './../../Assets/Images/concessions-image.webp';
import IceCreamFoodTruckImage from './../../Assets/Images/ice-cream-truck.webp';
import TuneRoundedIcon from '@material-ui/icons/TuneRounded';
import IceCreamIcon from '@mui/icons-material/Icecream';
import useStyles from './Services.Styles';
import { Link } from 'react-router-dom';

function Services() {
    const classes = useStyles();

    return (
        <main className={classes.root}>
            <Grid container spacing={4} alignItems="stretch" justifyContent="center">
                {/* Sampling & Testing Card */}
                <Grid item xs={12} md={6} lg={4}>
                    <Card className={classes.card}>
                        <Link
                            to="/movie-nights-options"
                            aria-label="Outdoor Movie Night Packages - View Options"
                            style={{ textDecoration: 'none' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    className={classes.images}
                                    image={GiantScreenImage}
                                    alt="Giant inflatable outdoor movie screen rental in Phoenix"
                                    loading="lazy"
                                    sx={{ aspectRatio: '600 / 450', width: '100%', height: 'auto' }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h2" component="h2" className={classes.cardTitle} style={{ fontFamily: 'inherit' }}>
                                        Outdoor Movie Nights
                                    </Typography>
                                    <Typography variant="h3" component="h3" className={classes.cardSubtitle}>
                                        Backyard & Outdoor Screen Rentals
                                    </Typography>
                                    <Divider style={{ height: 3, marginTop: 14 }} />
                                    <List className={classes.bulletList}>
                                        {[
                                            "Screen sizes for any crowd",
                                            "HD projector with media hookup",
                                            "Pro audio speakers included",
                                            "Full setup and on-site tech"
                                        ].map((item, i) => (
                                            <ListItem key={i} className={classes.listItem}>
                                                <ListItemIcon>
                                                    <CheckCircleIcon className={classes.icon} />
                                                </ListItemIcon>
                                                <ListItemText primary={item} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </CardContent>
                            </CardActionArea>
                        </Link>
                        <CardActions style={{ padding: 0 }}>
                            <Box className={classes.buttonContainer}>
                                <Button
                                    size="large"
                                    className={classes.contactButton}
                                    component={Link}
                                    to="/movie-nights-options"
                                    startIcon={<TuneRoundedIcon />}
                                >
                                    View Options
                                </Button>
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <Card className={classes.card}>
                        <Link
                            to="/concessions-options"
                            aria-label="Concessions & Add-Ons – View Options"
                            style={{ textDecoration: 'none' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    className={classes.images}
                                    image={ConcessionsImage}
                                    alt="Popcorn machine and concession stand for outdoor movie events"
                                    loading="lazy"
                                    sx={{ aspectRatio: '600 / 375', width: '100%', height: 'auto' }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h2" component="h2" className={classes.cardTitle} style={{ fontFamily: 'inherit' }}>
                                        Concessions & Add-Ons
                                    </Typography>
                                    <Typography variant="h3" component="h3" className={classes.cardSubtitle}>
                                        Popcorn, Candy & Drinks
                                    </Typography>
                                    <Divider style={{ height: 3, marginTop: 14 }} />
                                    <List className={classes.bulletList}>
                                        {[
                                            "Fresh popcorn machine & supplies",
                                            "Candy assortment and displays",
                                            "Cold beverages (optional add-on)",
                                            "Staffed service available"
                                        ].map((item, i) => (
                                            <ListItem key={i} className={classes.listItem}>
                                                <ListItemIcon>
                                                    <CheckCircleIcon className={classes.icon} />
                                                </ListItemIcon>
                                                <ListItemText primary={item} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </CardContent>
                            </CardActionArea>
                        </Link>
                        <CardActions style={{ padding: 0 }}>
                            <Box className={classes.buttonContainer}>
                                <Button
                                    size="large"
                                    className={classes.contactButton}
                                    component={Link}
                                    to="/concessions-options"
                                    startIcon={<TuneRoundedIcon />}
                                >
                                    View Options
                                </Button>
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>

                {/* Ice Cream Food Truck Card */}
                <Grid item xs={12} md={6} lg={4}>
                    <Card className={classes.card}>
                        <Link
                            to="/ice-cream-food-truck"
                            aria-label="Ice Cream Sundae & Coffee Food Truck – Learn More"
                            style={{ textDecoration: 'none' }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    className={classes.images}
                                    image={IceCreamFoodTruckImage}
                                    alt="Ice cream sundae and coffee food truck for events in Phoenix"
                                    loading="lazy"
                                    sx={{ aspectRatio: '615 / 400', width: '100%', height: 'auto' }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h2" component="h2" className={classes.cardTitle} style={{ fontFamily: 'inherit' }}>
                                        Ice Cream Sundaes & Coffee Food Truck
                                    </Typography>
                                    <Typography variant="h3" component="h3" className={classes.cardSubtitle}>
                                        Sundae Bars & Ice Cream Socials
                                    </Typography>
                                    <Divider style={{ height: 3, marginTop: 14 }} />
                                    <List className={classes.bulletList}>
                                        {[
                                            "Premium ice cream & toppings",
                                            "Sundae bar packages",
                                            "Dairy-free/vegan options",
                                            "Perfect for corporate & private events"
                                        ].map((item, i) => (
                                            <ListItem key={i} className={classes.listItem}>
                                                <ListItemIcon>
                                                    <CheckCircleIcon className={classes.icon} />
                                                </ListItemIcon>
                                                <ListItemText primary={item} />
                                            </ListItem>
                                        ))}
                                    </List>
                                </CardContent>
                            </CardActionArea>
                        </Link>
                        <CardActions style={{ padding: 0 }}>
                            <Box className={classes.buttonContainer}>
                                <Button
                                    size="large"
                                    className={classes.contactButton}
                                    component={Link}
                                    to="/ice-cream-food-truck"
                                    startIcon={<IceCreamIcon />}
                                >
                                    View Options
                                </Button>
                            </Box>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </main>
    );
}

export default Services;
