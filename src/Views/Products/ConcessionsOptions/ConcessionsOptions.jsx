import { Divider, Grid } from "@material-ui/core";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import PopcornImage from './../../../Assets/Images/product-popcorn.jpg';
import GeneratorImage from './../../../Assets/Images/generator.webp';
import CottonCandyImage from './.././../../Assets/Images/product-cotton-candy.jpg';
import CallToAction from "./../../../Components/CallToAction/CallToAction";
import useStyles from './ConcessionsOptions.Styles';
import { Link } from 'react-router-dom';

function ConcessionsOptions() {
    const classes = useStyles();

    const cards = [
        {
            key: 'popcorn',
            to: '/concessions-options#popcorn',
            image: PopcornImage,
            imageAlt: 'Popcorn Machine Rentals Arizona',
            title: 'Popcorn Machine',
            subtitle: 'Movie-theater style, fresh & hot',
            price: '$89',
            bullets: [
                'Commercial Popcorn Machine',
                'Supplies included (kernels, oil, bags)',
                'On-site attendant optional',
                'Additional servings ($20 ea. 50 Servings)',
            ],
        },
        {
            key: 'cotton-candy',
            to: '/concessions-options#cotton-candy',
            image: CottonCandyImage,
            imageAlt: 'Cotton candy concession',
            title: 'Cotton Candy',
            subtitle: 'Classic spun sugar fun',
            price: '$89',
            bullets: [
                'Commercial Cotton Candy Machine',
                '60 Cones and Floss Sugar',
                'On-site attendant optional',
                'Additional servings ($20 ea. 50 Servings)',
            ],
        },
        {
            key: 'generators',
            to: '/concessions-options#generators',
            image: GeneratorImage,
            imageAlt: 'Quiet inverter generator',
            title: 'Generators',
            subtitle: 'Quiet power for any venue',
            price: '$69',
            bullets: [
                'Quiet inverter generators',
                'Power for projector, audio, and screens',
                'Cables & distro included',
                'Fuel included for standard runtimes',
            ],
        },
    ];

    return (
        <main>
            <Box className={classes.titleBox}>
                <h1 className={classes.title}>
                    Concessions & Add-Ons — Popcorn • Cotton Candy • Ice Cream • Tables & Chairs • Generators • Additional Screens
                </h1>
            </Box>

            <Grid container spacing={4} alignItems="stretch" justifyContent="center" className={classes.gridContainer}>
                {cards.map(({ key, to, image, imageAlt, title, price, subtitle, bullets }) => (
                    <Grid item xs={12} md={4} key={key}>
                        <Card className={classes.card} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <Link to={to} style={{ textDecoration: 'none', flexGrow: 1, display: 'flex' }}>
                                <CardActionArea style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                    <CardMedia
                                        component="img"
                                        height="275"
                                        image={image}
                                        alt={imageAlt}
                                        aria-label={imageAlt}
                                    />
                                    <CardContent style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                        <Typography
                                            gutterBottom
                                            variant="h2"
                                            component="h2"
                                            className={classes.cardTitle}
                                            style={{ fontFamily: 'inherit' }}
                                        >
                                            {title}
                                        </Typography>

                                        <Typography
                                            variant="h3"
                                            component="h3"
                                            className={classes.cardSubtitle}
                                        >
                                            {subtitle}
                                        </Typography>

                                        <Divider style={{ height: 1, marginTop: 16, backgroundColor: "#730a1b" }} />

                                        <List className={classes.bulletList}>
                                            {bullets.map((item, i) => (
                                                <ListItem key={i} className={classes.listItem}>
                                                    <ListItemIcon>
                                                        <CheckCircleIcon className={classes.icon} />
                                                    </ListItemIcon>
                                                    <ListItemText primary={item} />
                                                </ListItem>
                                            ))}
                                        </List>

                                        {/* Bottom block pinned above the buttons */}
                                        <Box style={{ marginTop: 'auto' }}>
                                            <Typography
                                                variant="h4"
                                                component="p"
                                                className={classes.cardPrice}

                                                aria-label={`${price}`}
                                            >
                                                {price}
                                            </Typography>

                                            <Typography
                                                variant="body2"
                                                component="p"
                                                className={classes.quoteNote}
                                                style={{ color: '#444', marginBottom: 0 }}
                                            >
                                                Final quote determined by event location.{' '}Don't forget to check out our{' '}
                                                <Link to="/movie-nights-options" className={classes.movieEventsLink}>
                                                    Outdoor Movie Event Options
                                                </Link>
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </CardActionArea>
                            </Link>

                            <CardActions style={{ padding: 0 }}>
                                <Box className={classes.buttonContainer}>
                                    <Button
                                        size="small"
                                        className={classes.contactButton}
                                        component="a"
                                        href="tel:+12083523909"
                                    >
                                        (208) 352-3909
                                    </Button>
                                    <Button
                                        size="small"
                                        className={classes.contactButton}
                                        component={Link}
                                        to="/contact"
                                    >
                                        Get a Quote
                                    </Button>
                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <CallToAction />
        </main>
    );
}

export default ConcessionsOptions;
