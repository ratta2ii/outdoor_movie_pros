import { Divider, Grid } from "@material-ui/core";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import GiantScreenImage from './../../../Assets/Images/giant-screen.webp';
import PoolImage from './../../../Assets/Images/pool.webp';
import SmallScreenImage from './../../../Assets/Images/GalleryImages/gallery2.webp';
import DoubleScreenImage from './../../../Assets/Images/double-movie-screen.webp';
import SoundSystemImage from './../../../Assets/Images/sound.webp';
import CallToAction from "./../../../Components/CallToAction/CallToAction";
import CallIcon from '@mui/icons-material/Call';
import RequestQuoteIcon from '@mui/icons-material/RequestQuoteTwoTone';
import useStyles from './MovieNightsOptions.Styles';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function MovieNightsOptions() {
    const classes = useStyles();
    const canonicalUrl = "https://outdoormoviepros.com/movie-nights-options";

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
                {/* Core SEO */}
                <title>Inflatable Movie Screen Rental in Phoenix | Outdoor Movie Packages</title>
                <meta
                    name="description"
                    content="Browse outdoor movie packages in Phoenix: backyard screens, giant inflatable screens, dive-in pool movies, and double-screen events. HD projector, pro sound, delivery, setup, on-site tech, and teardown."
                />
                <meta name="keywords" content="outdoor movie packages phoenix, inflatable screen rental phoenix, backyard movie night phoenix, dive in movie phoenix, movies in the park phoenix" />
                <link rel="canonical" href={canonicalUrl} />

                {/* Open Graph — MINIMAL OVERRIDE */}
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content="Backyard Movie Night & Inflatable Screen Packages in Phoenix" />
                <meta
                    property="og:description"
                    content="Outdoor movie night packages with inflatable screens, HD projector, and pro audio. Options for backyards, parks, schools, churches, HOAs, and pool parties."
                />

                {/* Twitter — MINIMAL OVERRIDE */}
                <meta name="twitter:title" content="Backyard Movie Night & Inflatable Screen Packages in Phoenix" />
                <meta
                    name="twitter:description"
                    content="Choose from backyard screens to giant inflatable and double-screen setups. Projector, sound, delivery, setup, and on-site tech included."
                />

                {/* JSON-LD: WebPage + OfferCatalog — SLASH BEFORE # */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "WebPage",
                                "@id": `${canonicalUrl}/#webpage`,
                                "url": canonicalUrl,
                                "name": "Inflatable Movie Screen Rental in Phoenix | Outdoor Movie Packages",
                                "description": "Browse outdoor movie packages in Phoenix: backyard screens, giant inflatable screens, dive-in pool movies, and double-screen events. HD projector, pro sound, delivery, setup, on-site tech, and teardown.",
                                "isPartOf": { "@id": "https://outdoormoviepros.com/#website" },
                                "about": { "@id": "https://outdoormoviepros.com/#business" },
                                "breadcrumb": {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://outdoormoviepros.com" },
                                        { "@type": "ListItem", "position": 2, "name": "Movie Night Packages", "item": canonicalUrl }
                                    ]
                                }
                            },
                            {
                                "@type": "OfferCatalog",
                                "name": "Outdoor Movie Night Packages",
                                "url": canonicalUrl,
                                "itemListElement": [
                                    {
                                        "@type": "Offer",
                                        "price": "699.00",
                                        "priceCurrency": "USD",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Outdoor Movie Night for Rent",
                                            "description": "Big-crowd outdoor cinema package — Giant Inflatable Movie Screen; Bright HD projector & media hookup; Concert Grade QSC Sound + Pre-Show Music; Full setup, On-Site Tech, Teardown.",
                                            "image": "https://outdoormoviepros.com/images/giant-screen.webp",
                                            "url": `${canonicalUrl}/#giant-inflatable`
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "price": "479.00",
                                        "priceCurrency": "USD",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Small Event Movie Screen",
                                            "description": "Community, school, & church friendly — QSC Powered Speakers; Upgraded brightness HD projection; Blu-Ray DVD Player & Mixer; Professional Staff; Plug-and-play: laptop/streaming ready.",
                                            "image": "https://outdoormoviepros.com/images/gallery2.webp",
                                            "url": `${canonicalUrl}/#small-event`
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "price": "1099.00",
                                        "priceCurrency": "USD",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Double Screen Movie Night",
                                            "description": "Two screens, one event — Double of everything; Two synchronized screens; Concert Grade QSC Sound + Pre-Show Music; Bright HD projector & media hookup; Full setup, On-Site Tech, Teardown.",
                                            "image": "https://outdoormoviepros.com/images/double-movie-screen.webp",
                                            "url": `${canonicalUrl}/#double-screen`
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "price": "349.00",
                                        "priceCurrency": "USD",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Backyard Movie Screen Rentals",
                                            "description": "Perfect for home & small gatherings — 9'x5′ screen (to ~40 guests); Compact HD projector; 2-speaker audio; Setup included (needs two standard outlets); Plug-and-play: laptop/streaming ready.",
                                            "image": "https://outdoormoviepros.com/images/gallery2.webp",
                                            "url": `${canonicalUrl}/#backyard`
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "price": "699.00",
                                        "priceCurrency": "USD",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Dive-In Movie Night",
                                            "description": "Pool party screening with splash-safe layout — Rear projection near water; Cable management & GFCI-safe setup; Optimized audio for pool environments; Full setup, On-Site Tech, Teardown.",
                                            "image": "https://outdoormoviepros.com/images/pool.webp",
                                            "url": `${canonicalUrl}/#dive-in`
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "price": "249.00",
                                        "priceCurrency": "USD",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Sound System Rental",
                                            "description": "Powerful audio for any event — Pair of powered speakers; Wireless handheld mic; Mixer + all cables; Setup and basic sound check.",
                                            "image": "https://outdoormoviepros.com/images/sound.webp",
                                            "url": `${canonicalUrl}/#sound-system`
                                        }
                                    }
                                ]
                            }
                        ]
                    })}
                </script>
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
                    <Grid item xs={12} md={6} lg={4} key={key}>
                        <Card className={classes.card} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <Link to={to} style={{ textDecoration: 'none', flexGrow: 1, display: 'flex' }}>
                                <CardActionArea style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                    <CardMedia
                                        component="img"
                                        image={image}
                                        alt={imageAlt}
                                        sx={{
                                            // 1. Fluid width (fills container)
                                            width: '100%',
                                            height: 'auto',

                                            // 2. Responsive max width & height
                                            maxWidth: {
                                                xs: 450,
                                                sm: 515,
                                            },
                                            minHeight: {
                                                xs: 223,
                                                sm: 283,
                                                md: 325,
                                                lg: 275,
                                                xl: 339,
                                            },

                                            // 3. Media queries for specific breakpoints
                                            '@media (min-width: 600px) and (max-width: 660px)': {
                                                minHeight: 225,
                                            },

                                            '@media (min-width: 960px) and (max-width: 1060px)': {
                                                minHeight: 272,
                                            },

                                            '@media (min-width: 1200px) and (max-width: 1280px)': {
                                                minHeight: 342,
                                            },

                                            '@media (min-width: 1279px) and (max-width: 1380px)': {
                                                minHeight: "240px !important"
                                            },

                                            '@media (min-width: 1536px) and (max-width: 1736px)': {
                                                minHeight: "315px !important"
                                            },

                                            '@media (min-width: 1920px) and (max-width: 2020px)': {
                                                minHeight: 292
                                            },

                                            // 4. Object fit (crop/zoom if needed)
                                            objectFit: 'cover',

                                            // 5. Rounded corners, shadow, etc.
                                            borderRadius: 2,
                                            boxShadow: 3,
                                        }}
                                    />
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
                                        startIcon={<CallIcon />}
                                        aria-label="Call Outdoor Movie Pros at 602-638-6510"
                                    >
                                        (602) 638-6510
                                    </Button>
                                    <Button
                                        size="small"
                                        className={classes.contactButton}
                                        component={Link}
                                        to="/contact"
                                        startIcon={<RequestQuoteIcon />}
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
                <Typography variant="body1" component="p" paragraph style={{}}>
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
