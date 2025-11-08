import { Divider, Grid } from "@material-ui/core";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import PopcornImage from './../../../Assets/Images/product-popcorn5.webp';
import CottonCandyImage from './.././../../Assets/Images/product-cotton-candy.webp';
import ConcessionBoothImage from './.././../../Assets/Images/concession-booth.webp';
import ConcessionStaffImage from './.././../../Assets/Images/concession-staff.webp';
import SoundSystemImage from './.././../../Assets/Images/sound.webp';
import LightTowersImage from './.././../../Assets/Images/light-tower.webp';
import GeneratorImage from './../../../Assets/Images/generator.webp';
import GlowNecklacesImage from './.././../../Assets/Images/glow-necklaces.webp';
import BottledWaterImage from './.././../../Assets/Images/bottled-water.webp';
import DrinkTroughImage from './.././../../Assets/Images/drink-trough.webp';
import WaterBarrelImage from './.././../../Assets/Images/water-barrel.webp';
import CallToAction from "./../../../Components/CallToAction/CallToAction";
import useStyles from './ConcessionsOptions.Styles';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function ConcessionsOptions() {
    const classes = useStyles();
    const canonicalUrl = "https://outdoormoviepros.com/concessions-options";

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
                'Commercial popcorn machine',
                'Supplies included (kernels, oil, bags)',
                'On-site attendant optional',
                'Additional servings ($20 per 50 servings)',
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
                'Commercial cotton candy machine',
                '60 cones and floss sugar',
                'On-site attendant optional',
                'Additional servings ($20 per 50 servings)',
            ],
        },
        {
            key: 'concession-booth',
            to: '/concessions-options#concession-booth',
            image: ConcessionBoothImage,
            imageAlt: 'Concession booth canopy with backdrop',
            title: 'Concession Booth',
            subtitle: 'Add eye appeal for any event',
            price: '$99',
            bullets: [
                "10' x 10' canopy",
                'Includes front and backdrop',
            ],
        },
        {
            key: 'concession-staff',
            to: '/concessions-options#concession-staff',
            image: ConcessionStaffImage,
            imageAlt: 'Concession staff for events',
            title: 'Concession Staff',
            subtitle: "We'll take care of it all",
            price: '$150',
            bullets: [
                'Professional staff for concession',
                'Movie screen rentals include staff',
            ],
        },
        {
            key: 'sound-system',
            to: '/concessions-options#sound-system',
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
        {
            key: 'light-towers',
            to: '/concessions-options#light-towers',
            image: LightTowersImage,
            imageAlt: 'Light towers for events',
            title: 'Light Towers',
            subtitle: 'Ideal in dark areas',
            price: '$150',
            bullets: [
                'Add a generator if no outlet',
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
        {
            key: 'glow-necklaces',
            to: '/concessions-options#glow-necklaces',
            image: GlowNecklacesImage,
            imageAlt: 'Glow necklaces for party',
            title: 'Glow Necklaces',
            subtitle: 'Brighten up any party',
            price: '$39',
            bullets: [
                '22" necklaces',
                '100 pack per order',
            ],
        },
        {
            key: 'bottled-water-soda',
            to: '/concessions-options#bottled-water-soda',
            image: BottledWaterImage,
            imageAlt: 'Bottled water and soda add-on',
            title: 'Bottled Water / Soda',
            subtitle: 'Chilled beverages for guests',
            price: '$0.50 – $1.00',
            bullets: [
                'Minimum order required',
                'Add a trough or cooler for cooling',
                'Ice is an additional charge',
            ],
        },
        {
            key: 'drink-trough',
            to: '/concessions-options#drink-trough',
            image: DrinkTroughImage,
            imageAlt: 'Drink trough for beverages',
            title: 'Drink Trough',
            subtitle: 'Holds up to 200 drinks',
            price: '$49',
            bullets: [
                'Ice not included',
                'Ice is an additional charge',
            ],
        },
        {
            key: 'water-barrel',
            to: '/concessions-options#water-barrel',
            image: WaterBarrelImage,
            imageAlt: 'Water barrel for anchoring',
            title: 'Water Barrel',
            subtitle: 'Anchoring when sandbags and stakes do not work',
            price: '$25',
            bullets: [
                'We can bring pre-filled (upon request)',
            ],
        },
    ];

    return (
        <main>
            <Helmet>
                {/* Core SEO */}
                <title>Concessions & Add-Ons for Outdoor Movie Nights in Phoenix</title>
                <meta
                    name="description"
                    content="Rent popcorn machines, cotton candy, generators, light towers, sound systems, and more for outdoor movie nights in Phoenix. Full setup and delivery included."
                />
                <meta name="keywords" content="concessions phoenix, popcorn machine rental phoenix, cotton candy rental phoenix, generator rental phoenix, outdoor movie add-ons phoenix" />
                <link rel="canonical" href={canonicalUrl} />

                {/* Open Graph — MINIMAL OVERRIDE */}
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content="Concessions & Add-Ons for Outdoor Movie Nights in Phoenix" />
                <meta
                    property="og:description"
                    content="Popcorn, cotton candy, generators, lighting, sound, and more — everything to enhance your outdoor movie night in Phoenix."
                />

                {/* Twitter — MINIMAL OVERRIDE */}
                <meta name="twitter:title" content="Concessions & Add-Ons for Outdoor Movie Nights in Phoenix" />
                <meta
                    name="twitter:description"
                    content="Add popcorn, cotton candy, power, lighting, and sound to your Phoenix outdoor movie night. Full setup included."
                />

                {/* JSON-LD: WebPage + OfferCatalog — NO priceSpecification, NO availability */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "WebPage",
                                "@id": `${canonicalUrl}/#webpage`,
                                "url": canonicalUrl,
                                "name": "Concessions & Add-Ons for Outdoor Movie Nights in Phoenix",
                                "description": "Rent popcorn machines, cotton candy, generators, light towers, sound systems, and more for outdoor movie nights in Phoenix. Full setup and delivery included.",
                                "isPartOf": { "@id": "https://outdoormoviepros.com/#website" },
                                "about": { "@id": "https://outdoormoviepros.com/#business" },
                                "breadcrumb": {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://outdoormoviepros.com" },
                                        { "@type": "ListItem", "position": 2, "name": "Concessions & Add-Ons", "item": canonicalUrl }
                                    ]
                                }
                            },
                            {
                                "@type": "OfferCatalog",
                                "name": "Concessions & Add-Ons",
                                "url": canonicalUrl,
                                "itemListElement": [
                                    {
                                        "@type": "Offer",
                                        "price": "89.00",
                                        "priceCurrency": "USD",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Popcorn Machine",
                                            "description": "Commercial machine with supplies (kernels, oil, bags). Additional servings $20/50. Attendant optional.",
                                            "image": "https://outdoormoviepros.com/images/product-popcorn5.webp",
                                            "url": `${canonicalUrl}/#popcorn`
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "price": "89.00",
                                        "priceCurrency": "USD",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Cotton Candy",
                                            "description": "Commercial machine with 60 cones and floss sugar. Additional servings $20/50. Attendant optional.",
                                            "image": "https://outdoormoviepros.com/images/product-cotton-candy.webp",
                                            "url": `${canonicalUrl}/#cotton-candy`
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "price": "99.00",
                                        "priceCurrency": "USD",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Concession Booth",
                                            "description": "10' x 10' canopy with front and backdrop for professional presentation.",
                                            "image": "https://outdoormoviepros.com/images/concession-booth.webp",
                                            "url": `${canonicalUrl}/#concession-booth`
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "price": "150.00",
                                        "priceCurrency": "USD",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Concession Staff",
                                            "description": "Professional staff to operate concessions. (Included with movie screen rentals.)",
                                            "image": "https://outdoormoviepros.com/images/concession-staff.webp",
                                            "url": `${canonicalUrl}/#concession-staff`
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "price": "249.00",
                                        "priceCurrency": "USD",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Sound System Rental",
                                            "description": "Pair of powered speakers, wireless mic, mixer, cables, setup, and sound check.",
                                            "image": "https://outdoormoviepros.com/images/sound.webp",
                                            "url": `${canonicalUrl}/#sound-system`
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "price": "150.00",
                                        "priceCurrency": "USD",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Light Towers",
                                            "description": "Portable lighting for dark areas. Add generator if no power.",
                                            "image": "https://outdoormoviepros.com/images/light-tower.webp",
                                            "url": `${canonicalUrl}/#light-towers`
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "price": "69.00",
                                        "priceCurrency": "USD",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Generators",
                                            "description": "Quiet inverter generators with cables, distribution, and fuel for standard runtimes.",
                                            "image": "https://outdoormoviepros.com/images/generator.webp",
                                            "url": `${canonicalUrl}/#generators`
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "price": "39.00",
                                        "priceCurrency": "USD",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Glow Necklaces",
                                            "description": "22\" glow necklaces (100 pack) for fun and visibility.",
                                            "image": "https://outdoormoviepros.com/images/glow-necklaces.webp",
                                            "url": `${canonicalUrl}/#glow-necklaces`
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "price": "0.50",
                                        "priceCurrency": "USD",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Bottled Water / Soda",
                                            "description": "Chilled beverages. Minimum order required. Ice and cooling extra.",
                                            "image": "https://outdoormoviepros.com/images/bottled-water.webp",
                                            "url": `${canonicalUrl}/#bottled-water-soda`
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "price": "49.00",
                                        "priceCurrency": "USD",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Drink Trough",
                                            "description": "Holds up to 200 drinks. Ice available as add-on.",
                                            "image": "https://outdoormoviepros.com/images/drink-trough.webp",
                                            "url": `${canonicalUrl}/#drink-trough`
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "price": "25.00",
                                        "priceCurrency": "USD",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Water Barrel (Anchoring)",
                                            "description": "Anchoring solution where stakes/sandbags fail. Pre-filled available.",
                                            "image": "https://outdoormoviepros.com/images/water-barrel.webp",
                                            "url": `${canonicalUrl}/#water-barrel`
                                        }
                                    }
                                ]
                            }
                        ]
                    })}
                </script>
            </Helmet>

            {/* sr-only heading for SEO/a11y (not visible) */}
            <h1 className="sr-only">
                Concessions and add-ons for outdoor movie nights in Phoenix — popcorn, cotton candy, generators, lighting, sound, and more
            </h1>

            {/* Visible page title */}
            <Box className={classes.titleBox}>
                <h1 className={classes.title}>
                    Concessions & Add-Ons — Popcorn Machine • Cotton Candy • Cold Beverages • Generators • Lighting • Sound • And More
                </h1>
                <h2 className={classes.subTitle}>
                    Outdoor Movie Pros delivers everything you need to transform any gathering into an unforgettable cinematic experience — from the sizzle of fresh popcorn and the chill of ice-cold drinks to reliable power, glowing ambiance, and crystal-clear sound, all set up and managed by our expert team.
                </h2>
            </Box>

            {/* Packages grid */}
            <Grid container spacing={4} alignItems="stretch" justifyContent="center" className={classes.gridContainer}>
                {cards.map(({ key, to, image, imageAlt, title, price, subtitle, bullets }) => (
                    <Grid item xs={12} md={6} lg={4} key={key}>
                        <Card className={classes.card} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <Link to={to} style={{ textDecoration: 'none', flexGrow: 1, display: 'flex' }}>
                                <CardActionArea style={{ display: 'flex', flexDirection: 'column' }}>
                                    <CardMedia
                                        component="img"
                                        image={image}
                                        alt={imageAlt}
                                        sx={{
                                            // 1. Fluid width (fills container)
                                            width: '100%',
                                            // height: 'auto',

                                            // 2. Responsive max width & height
                                            maxWidth: {
                                                xs: 450,
                                                sm: 515,
                                            },
                                            height: {
                                                xs: 275,
                                                sm: 325,
                                                md: 332,
                                                lg: 312,
                                                xl: 360,
                                            },

                                            '@media (min-width: 2080px)': {
                                                height: 360
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
                    What’s Included with Our Concessions & Add-Ons
                </Typography>
                <Typography variant="body1" component="p" paragraph>
                    Every concession or event add-on is designed to complement your outdoor movie experience — from the aroma of fresh popcorn and the fun of cotton candy to reliable power, sound, and lighting solutions. All rentals include delivery, setup, on-site tech, and removal by our team, with optional attendants available for small backyard events across the Phoenix metro area.
                </Typography>
                <List className={classes.infoList}>
                    <ListItem>
                        <ListItemIcon><CheckCircleIcon className={classes.icon} /></ListItemIcon>
                        <ListItemText primary="Fresh popcorn and cotton candy machines with supplies included" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><CheckCircleIcon className={classes.icon} /></ListItemIcon>
                        <ListItemText primary="Optional concession booth and staff to run your stand" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><CheckCircleIcon className={classes.icon} /></ListItemIcon>
                        <ListItemText primary="Generators, light towers, and audio gear for any size venue" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><CheckCircleIcon className={classes.icon} /></ListItemIcon>
                        <ListItemText primary="Glow necklaces, bottled drinks, and other fun extras for guests" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><CheckCircleIcon className={classes.icon} /></ListItemIcon>
                        <ListItemText primary="Professional delivery, setup, and teardown handled by our crew" />
                    </ListItem>
                </List>
            </Box>
            <CallToAction />
        </main>
    );
}

export default ConcessionsOptions;
