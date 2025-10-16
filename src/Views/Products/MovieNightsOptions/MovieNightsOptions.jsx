import { Divider, Grid } from "@material-ui/core";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import GiantScreenImage from './../../../Assets/Images/giant-screen.jpg';
import PoolImage from './../../../Assets/Images/pool.webp';
import SmallScreenImage from './../../../Assets/Images/GalleryImages/gallery2.webp';
import DoubleScreenImage from './../../../Assets/Images/double-movie-screen.webp';
import CallToAction from "./../../../Components/CallToAction/CallToAction";
import useStyles from './MovieNightsOptions.Styles';
import { Link } from 'react-router-dom';

function MovieNightsOptions() {
    const classes = useStyles();

    const cards = [
        {
            key: 'giant-inflatable',
            to: '/movie-nights-options#giant-inflatable',
            image: GiantScreenImage,
            imageAlt: 'Giant inflatable Outdoor Movie Night in Phoenix',
            title: 'Outdoor Movie Night for Rent',
            price: '$699.00',
            subtitle: 'Big-crowd outdoor cinema package',
            bullets: [
                'Giant Inflatable Movie Screen',
                'Bright HD projector & Media Hookup',
                'Concert Grade QSC Sound + Pre-Show Music',
                'Full setup, On-Site Tech, Teardown',
            ],
        },
        {
            key: 'backyard',
            to: '/movie-nights-options#backyard',
            image: SmallScreenImage,
            imageAlt: 'Inflatable Movie Screen for Rent AZ',
            title: 'Backyard Movie Screen Rentals',
            price: '$349.00',
            subtitle: 'Perfect for home & small gatherings',
            bullets: [
                '9\'x5′ screen ideal for up to 40 guests',
                'Compact HD projector, easy media input',
                '2-speaker audio for clear dialogue',
                'Setup included—2 standard outlets needed',
                'Plug-and-play: laptop/streaming ready',
            ],
        },
        {
            key: 'small-event',
            to: '/movie-nights-options#small-event',
            image: SmallScreenImage,
            imageAlt: 'Big Inflatable outdoor movie screens for rent',
            title: 'Small Event Movie Screen',
            price: '$479.00',
            subtitle: 'Community, school, & church friendly',
            bullets: [
                'QSC Powered Speakers',
                'Upgraded brightness HD projection',
                'Blu-Ray DVD Player & Mixer',
                'Professional Staff for Event',
                'Plug-and-play: laptop/streaming ready',
            ],  
        },
        {
            key: 'double-screen',
            to: '/movie-nights-options#double-screen',
            image: DoubleScreenImage, // Fixed typo: GiantScasdfreenImage -> GiantScreenImage
            imageAlt: 'Big Inflatable Movie Screens for Large Events in Arizona',
            title: 'Double Screen Movie Night',
            price: '$1,099.00',
            subtitle: 'Two screens, one event—twice the fun',
            bullets: [
                'Double of Everything',
                'Two synchronized screens',
                'Concert Grade QSC Sound + Pre-Show Music',
                'Bright HD projector & Media Hookup',
                'Full setup, On-Site Tech, Teardown',
            ],
        },
        {
            key: 'dive-in',
            to: '/movie-nights-options#dive-in',
            image: PoolImage,
            imageAlt: 'Poolside dive-in movie for rent Scottsdale, AZ',
            title: 'Dive-In Movie Night',
            price: '$699.00',
            subtitle: 'Pool party screening with splash-safe layout',
            bullets: [
                'Rear projection setup near water',
                'Cable management & GFCI-safe setup',
                'Optimized audio for pool environments',
                'Full setup, On-Site Tech, Teardown',
            ],
        },
    ];

    return (
        <main>
            <Box className={classes.titleBox}>
                <h1 className={classes.title}>
                    Outdoor Movie Nights — Backyard • Corporate • HOA • Pool Parties • Schools • Churches • Community Events
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
                                                // style={{
                                                //     display: 'inline-block',
                                                //     padding: '4px 12px',
                                                //     borderRadius: 999,
                                                //     background: '#e51433ff',
                                                //     color: '#fff',
                                                //     fontWeight: 700,
                                                //     fontSize: '0.95rem',
                                                //     marginBottom: 6
                                                // }}
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
                                                Final quote determined by event location and{' '}
                                                <Link to="/concessions-options" className={classes.addOnsLink}>
                                                    Concessions and Equipment Add-Ons
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

export default MovieNightsOptions;
