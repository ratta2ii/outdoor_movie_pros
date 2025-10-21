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
import SoundSystemImage from './../../../Assets/Images/sound.webp';
import CallToAction from "./../../../Components/CallToAction/CallToAction";
import useStyles from './MovieNightsOptions.Styles';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

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
            image: DoubleScreenImage,
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
            key: 'backyard',
            to: '/movie-nights-options#backyard',
            image: SmallScreenImage,
            imageAlt: 'Inflatable Movie Screen for Rent AZ',
            title: 'Backyard Movie Screen Rentals',
            price: '$349.00',
            subtitle: 'Perfect for home & small gatherings',
            bullets: [
                "9'x5′ screen ideal for up to 40 guests",
                'Compact HD projector, easy media input',
                '2-speaker audio for clear dialogue',
                'Setup included—2 standard outlets needed',
                'Plug-and-play: laptop/streaming ready',
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
        {
            key: 'sound-system',
            to: '/movie-nights-options#sound-system',
            image: SoundSystemImage,
            imageAlt: 'Sound system for rent Scottsdale, AZ',
            title: 'Sound System Rental',
            price: '$249.00',
            subtitle: 'Powerful audio for any event',
            bullets: [
                'Pair of powered speakers',
                'Wireless handheld microphone',
                'Mixer + all necessary cables',
                'Setup and basic sound check',
            ],
        },
    ];

    return (
        <main>
            <Helmet>
                <title>Inflatable Movie Screen Rental in Phoenix | Outdoor Movie Packages</title>

                <meta
                    name="description"
                    content="Browse outdoor movie packages in Phoenix: backyard screens, giant inflatable screens, dive-in pool movies, and double-screen events. HD projector, pro sound, delivery, setup, on-site tech, and teardown."
                />
                <meta name="robots" content="index,follow" />
                <link rel="canonical" href="https://outdoormoviepros.com/movie-nights-options" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Outdoor Movie Pros" />
                <meta property="og:url" content="https://outdoormoviepros.com/movie-nights-options" />
                <meta property="og:title" content="Backyard Movie Night & Inflatable Screen Packages in Phoenix" />
                <meta
                    property="og:description"
                    content="Outdoor movie night packages with inflatable screens, HD projector, and pro audio. Options for backyards, parks, schools, churches, HOAs, and pool parties."
                />
                <meta property="og:image" content="https://outdoormoviepros.com/company-logo.webp" />
                <meta property="og:image:alt" content="Outdoor Movie Pros logo" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Backyard Movie Night & Inflatable Screen Packages in Phoenix" />
                <meta
                    name="twitter:description"
                    content="Choose from backyard screens to giant inflatable and double-screen setups. Projector, sound, delivery, setup, and on-site tech included."
                />
                <meta name="twitter:image" content="https://outdoormoviepros.com/company-logo.webp" />
            </Helmet>

            {/* sr-only heading for SEO/a11y (tight, keyword-aligned) */}
            <h1 className="sr-only">
                Inflatable outdoor movie screen packages in Phoenix for parks, schools, churches, HOAs, backyards, and pool parties.
            </h1>

            {/* Visible page title */}
            <Box className={classes.titleBox}>
                <h1 className={classes.title}>
                    Outdoor Movie Night Packages in Phoenix and the Surrounding Areas
                </h1>
                <h2 className={classes.subTitle}>
                    At the park movie nights, backyard movie nights, giant inflatable screens, dive-in pool movies, and double-screen movie events. HD projector, pro sound, delivery, setup, on-site tech, and teardown included.
                </h2>
            </Box>

            {/* Packages grid */}
            <Grid container spacing={4} alignItems="stretch" justifyContent="center" className={classes.gridContainer}>
                {cards.map(({ key, to, image, imageAlt, title, price, subtitle, bullets }) => (
                    <Grid item xs={12} md={4} key={key}>
                        <Card className={classes.card} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <Link to={to} style={{ textDecoration: 'none', flexGrow: 1, display: 'flex' }}>
                                <CardActionArea style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                    <CardMedia component="img" height="275" image={image} alt={imageAlt} />
                                    <CardContent style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h2" component="h2" className={classes.cardTitle} style={{ fontFamily: 'inherit' }}>
                                            {title}
                                        </Typography>

                                        <Typography variant="h3" component="h3" className={classes.cardSubtitle}>
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
                                            <Typography variant="h4" component="p" className={classes.cardPrice} aria-label={`${price}`}>
                                                {price}
                                            </Typography>

                                            <Typography variant="body2" component="p" className={classes.quoteNote} style={{ color: '#444', marginBottom: 0 }}>
                                                Final quote determined by event location and{' '}
                                                <Link to="/concessions-options" className={classes.addOnsLink}>
                                                    Equipment Add-Ons & Concessions
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
                                        href="tel:+16026386510"
                                        aria-label="Call Outdoor Movie Pros at 602-638-6510"
                                    >
                                        (602) 638-6510
                                    </Button>
                                    <Button
                                        size="small"
                                        className={classes.contactButton}
                                        component={Link}
                                        to="/contact"
                                        aria-label="Contact Outdoor Movie Pros for a quote"
                                    >
                                        Get a Quote
                                    </Button>
                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Outdoor Movie Nights explanatory section (keyword-supporting, human-first) */}
            <Box component="section" className={classes.infoSection} sx={{ maxWidth: 1100, mx: 'auto', mt: 6, px: 2, color: '#fff' }}>
                <Typography variant="h2" component="h2" className={classes.infoTitle} gutterBottom>
                    What’s Included with Our Outdoor Movie Night Rentals
                </Typography>
                <Typography variant="body1" component="p" paragraph style={{  }}>
                    Every inflatable outdoor movie screen package includes an HD projector matched to your screen size, professional QSC audio, delivery and complete setup, an on-site technician to run the show, and teardown after the credits. We service backyards, parks, schools, churches, HOAs, and community venues across the Phoenix metro.
                </Typography>
                <List className={classes.infoList}>
                    <ListItem><ListItemIcon><CheckCircleIcon className={classes.icon} /></ListItemIcon><ListItemText primary="Inflatable movie screen sized for your crowd and viewing distance" /></ListItem>
                    <ListItem><ListItemIcon><CheckCircleIcon className={classes.icon} /></ListItemIcon><ListItemText primary="HD projector brightness tuned for outdoor viewing" /></ListItem>
                    <ListItem><ListItemIcon><CheckCircleIcon className={classes.icon} /></ListItemIcon><ListItemText primary="Pro audio with mixer and pre-show music" /></ListItem>
                    <ListItem><ListItemIcon><CheckCircleIcon className={classes.icon} /></ListItemIcon><ListItemText primary="On-site tech from setup through teardown" /></ListItem>
                    <ListItem><ListItemIcon><CheckCircleIcon className={classes.icon} /></ListItemIcon><ListItemText primary="Simple media hookup: laptop, streaming device, or Blu-ray" /></ListItem>
                </List>
            </Box>

            <CallToAction />
        </main>
    );
}

export default MovieNightsOptions;
