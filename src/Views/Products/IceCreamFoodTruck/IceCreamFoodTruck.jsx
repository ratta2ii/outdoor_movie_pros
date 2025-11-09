import React from "react";
import {
    Grid,
    Typography,
    Box,
    Button,
    List,
    ListItem,
    ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import IceCreamFoodTruckImage from "./../../../Assets/Images/ice-cream-truck.webp";
import IceCreamFoodTruckTwo from "./../../../Assets/Images/ice-cream-truck-two.webp";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const useStyles = makeStyles((theme) => ({
    sectionLight: {
        backgroundColor: '#101623',
        marginTop: 200,
        marginBottom: 100,
        padding: "150px 8%",
        [theme.breakpoints.down("lg")]: {
            padding: "100px 12% 150px",
        },
        [theme.breakpoints.down("xs")]: {
            backgroundColor: "#101623",
            padding: "75px 6%",
            marginTop: 100,
            marginBottom: 20,
        },
    },
    imageColLight: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        alignItems: "center",
    },
    imageWrapper: {
        maxWidth: 475,
        width: "100%",
        marginBottom: theme.spacing(3),
    },
    oblongImage: {
        width: "100%",
        height: "auto",
        maxHeight: 330,
        borderRadius: 10,
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        border: "4px solid rgba(0, 0, 0, 0.05)",
        transition: "transform 0.3s ease",
        "&:hover": {
            transform: "scale(1.02)",
        },
    },
    textContent: {
        maxWidth: 500,
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    titleBox: {
        width: '100%',
        height: '150px',
        border: '0.5em solid transparent',
        marginBottom: '80px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        padding: '1.5em',
        maxWidth: '28em',
        fontSize: '1.25em',
        fontFamily: 'Ubuntu, sans-serif',
        position: 'relative',
        justifySelf: 'center',
        alignSelf: 'center',

        // Background (with solid fallback)
        backgroundColor: '#FF69B4',
        background: 'linear-gradient(0deg, rgba(255,105,180,1) 0%, rgba(50,64,255,1) 100%)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'border-box',
        borderRadius: '.7em',
    },
    mainTitle: {
        fontSize: "1.8rem",
        textAlign: "center",
        [theme.breakpoints.down("xs")]: {
            fontSize: "1.5rem",
        },
    },
    title: {
        fontWeight: 700,
        fontFamily: "system-ui !important",
        fontSize: "2rem",
        marginBottom: 10,
        color: "#fff",
        [theme.breakpoints.down("sm")]: {
            fontSize: "2.2rem",
        },
    },
    subtext: {
        fontSize: "1.1rem",
        color: "#fff",
        marginBottom: 15,
        lineHeight: "1.4em",
    },
    italicSubtext: {
        fontSize: "1.1rem",
        color: "#fff",
        marginBottom: 15,
        fontStyle: "italic",
        lineHeight: "1.4em",
    },
    bulletList: {
        marginBottom: 25,
        paddingLeft: 8,
    },
    listItem: {
        padding: 0,
        marginLeft: 28,
        "& .MuiListItemText-primary": {
            lineHeight: "1.3em",
        },
    },
    listItemOptions: {
        padding: 0,
        paddingBottom: 5,
        "& .MuiListItemText-primary": {
            lineHeight: "1.3em",
        },
    },
    listItemText: {
        color: "#fff",
        fontSize: "1rem",
        marginLeft: theme.spacing(2),
    },
    sectionHeader: {
        fontWeight: 600,
        fontSize: "1.2rem",
        color: "#fff",
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(1),
    },
    sectionHeaderOptions: {
        fontWeight: 600,
        fontSize: "1.2rem",
        color: "#fff",
        marginTop: -10,
        marginBottom: theme.spacing(1),
    },
    buttonGroup: {
        display: "flex",
        justifyContent: "left",
        marginLeft: 25,
        gap: theme.spacing(2),
        [theme.breakpoints.down("sm")]: {
            marginLeft: 0,
        },
    },
    ctaButton: {
        backgroundColor: "#0264e3",
        color: "#ffffff",
        textTransform: "none",
        fontWeight: 500,
        padding: "10px 24px",
        borderRadius: 8,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
        width: "calc(48% - 8px)",
        lineHeight: 1.2,
        whiteSpace: "nowrap",
        minHeight: 40,
        "&:hover": {
            color: "#358cfd",
            backgroundColor: "#000000",
            boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            padding: "10px 16px",
            fontSize: "0.95rem",
            minHeight: 38,
        },
        [theme.breakpoints.down("xs")]: {
            width: "100%",
            padding: "10px 14px",
            fontSize: "0.9rem",
            minHeight: 36,
        },
    },
    secondaryButton: {
        color: "#358cfd",
        border: "2px solid #358cfd",
        textTransform: "none",
        fontWeight: 500,
        padding: "10px 24px",
        borderRadius: 8,
        transition: "all 0.3s ease",
        width: "calc(48% - 8px)",
        lineHeight: 1.2,
        whiteSpace: "nowrap",
        minHeight: 40,
        "&:hover": {
            backgroundColor: "#1b2027",
            boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%",
            padding: "10px 16px",
            fontSize: "0.95rem",
            minHeight: 38,
        },
        [theme.breakpoints.down("xs")]: {
            width: "100%",
            padding: "10px 14px",
            fontSize: "0.9rem",
            minHeight: 36,
        },
    },
    eventOptionsWrapper: {
        maxWidth: 475,
        width: "100%",
        marginTop: theme.spacing(2),
    },
}));

const IceCreamFoodTruck = () => {
    const classes = useStyles();
    const canonicalUrl = "https://outdoormoviepros.com/ice-cream-food-truck";

    return (
        <>
            <Helmet>
                {/* Core SEO */}
                <title>Ice Cream & Coffee Food Truck Catering in Phoenix</title>
                <meta
                    name="description"
                    content="Book an ice cream and coffee food truck for events across Phoenix—sundae bar, espresso drinks, friendly staff, full-service setup, and flexible payment options."
                />
                <meta name="keywords" content="ice cream food truck phoenix, coffee catering phoenix, sundae bar catering, corporate dessert truck, festival food truck phoenix" />
                <link rel="canonical" href={canonicalUrl} />

                {/* Voice Search */}
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="mobile-web-app-capable" content="yes" />

                {/* Open Graph — MINIMAL OVERRIDE */}
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content="Ice Cream & Coffee Food Truck Catering in Phoenix" />
                <meta
                    property="og:description"
                    content="Sundae bar and barista coffee food truck for corporate events, schools, festivals, and parties in Phoenix. Full-service team with fast, friendly service."
                />

                {/* Twitter — MINIMAL OVERRIDE */}
                <meta name="twitter:title" content="Ice Cream & Coffee Food Truck Catering in Phoenix" />
                <meta
                    name="twitter:description"
                    content="Hire a dessert and coffee food truck: build-your-own sundaes, espresso drinks, and professional staff. Serving events across Phoenix."
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
                                "name": "Ice Cream & Coffee Food Truck Catering in Phoenix",
                                "description": "Book an ice cream and coffee food truck for events across Phoenix—sundae bar, espresso drinks, friendly staff, full-service setup, and flexible payment options.",
                                "isPartOf": { "@id": "https://outdoormoviepros.com/#website" },
                                "about": { "@id": "https://outdoormoviepros.com/#business" },
                                "breadcrumb": {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://outdoormoviepros.com" },
                                        { "@type": "ListItem", "position": 2, "name": "Ice Cream Food Truck", "item": canonicalUrl }
                                    ]
                                }
                            },
                            {
                                "@type": "OfferCatalog",
                                "name": "Ice Cream & Coffee Food Truck Services",
                                "url": canonicalUrl,
                                "itemListElement": [
                                    {
                                        "@type": "Offer",
                                        "priceCurrency": "USD",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Ice Cream Sundae Bar Catering",
                                            "category": "Dessert Catering",
                                            "description": "Build-your-own sundaes with waffle cones & bowls, lots of toppings, and vegan/dairy-free options. Full-service setup with friendly staff.",
                                            "image": "https://outdoormoviepros.com/images/ice-cream-truck.webp",
                                            "areaServed": [
                                                "Phoenix AZ", "Scottsdale AZ", "Mesa AZ", "Chandler AZ",
                                                "Gilbert AZ", "Tempe AZ", "Glendale AZ", "Peoria AZ"
                                            ],
                                            "url": `${canonicalUrl}/#sundae-bar`
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "priceCurrency": "USD",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Barista Coffee Service",
                                            "category": "Coffee Catering",
                                            "description": "Espresso drinks made to order — lattes, cappuccinos, macchiatos, frappes, and espresso shots. Great for corporate mornings and late-night events.",
                                            "image": "https://outdoormoviepros.com/images/ice-cream-truck-two.webp",
                                            "areaServed": [
                                                "Phoenix AZ", "Scottsdale AZ", "Mesa AZ", "Chandler AZ",
                                                "Gilbert AZ", "Tempe AZ", "Glendale AZ", "Peoria AZ"
                                            ],
                                            "url": `${canonicalUrl}/#barista-coffee`
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "priceCurrency": "USD",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Full Truck Buyout (Pre-Pay)",
                                            "category": "Food Truck Catering",
                                            "description": "Rent the truck and treat your team or guests. Pre-pay options for a seamless, all-inclusive dessert and coffee experience with full staffing.",
                                            "image": "https://outdoormoviepros.com/images/ice-cream-truck.webp",
                                            "areaServed": [
                                                "Phoenix AZ", "Scottsdale AZ", "Mesa AZ", "Chandler AZ",
                                                "Gilbert AZ", "Tempe AZ", "Glendale AZ", "Peoria AZ"
                                            ],
                                            "url": `${canonicalUrl}/#full-buyout`
                                        }
                                    },
                                    {
                                        "@type": "Offer",
                                        "priceCurrency": "USD",
                                        "itemOffered": {
                                            "@type": "Service",
                                            "name": "Pay-As-You-Go Service",
                                            "category": "Food Truck Service",
                                            "description": "Perfect for public festivals and schools — we sell directly to attendees. Premium ice cream and coffee with no upfront cost to the organizer.",
                                            "image": "https://outdoormoviepros.com/images/ice-cream-truck-two.webp",
                                            "areaServed": [
                                                "Phoenix AZ", "Scottsdale AZ", "Mesa AZ", "Chandler AZ",
                                                "Gilbert AZ", "Tempe AZ", "Glendale AZ", "Peoria AZ"
                                            ],
                                            "url": `${canonicalUrl}/#pay-as-you-go`
                                        }
                                    }
                                ]
                            }
                        ]
                    })}
                </script>
            </Helmet>

            {/* sr-only heading for SEO/a11y */}
            <h1 className="sr-only">
                Ice cream and coffee food truck catering in Phoenix with sundaes, espresso drinks, full-service setup, and friendly staff
            </h1>

            <Box className={classes.sectionLight}>
                <Box className={classes.titleBox}>
                    <Typography variant="h1" className={classes.mainTitle}>
                        Ice Cream Sundae & Barista Coffee Food Truck for Events in Phoenix
                    </Typography>
                </Box>

                <Grid container spacing={4} alignItems="center" justifyContent="center">
                    {/* Images and Flexible Event Options on left */}
                    <Grid item xs={12} md={6} className={classes.imageColLight}>
                        <Box className={classes.imageWrapper}>
                            <img
                                src={IceCreamFoodTruckImage}
                                alt="Food truck exterior"
                                className={classes.oblongImage}
                            />
                        </Box>
                        <Box className={classes.imageWrapper}>
                            <img
                                src={IceCreamFoodTruckTwo}
                                alt="Barista coffee and ice cream service at the food truck"
                                className={classes.oblongImage}
                            />
                        </Box>
                        <Box className={classes.eventOptionsWrapper}>
                            <Typography className={classes.sectionHeaderOptions}>
                                Flexible Event Options:
                            </Typography>
                            <List>
                                <ListItem className={classes.listItemOptions}>
                                    <ListItemText
                                        primary={
                                            <>
                                                - <strong>Rent the Truck</strong>: Treat your employees or guests to the valley’s best dessert food truck. We offer full catering with pre-pay options for a seamless experience.
                                            </>
                                        }
                                        className={classes.listItemText}
                                    />
                                </ListItem>
                                <ListItem className={classes.listItemOptions}>
                                    <ListItemText
                                        primary={
                                            <>
                                                - <strong>Pay As You Go</strong>: Perfect for public events! We’ll roll up and collect directly from your event-goers, bringing premium ice cream and coffee without any upfront cost.
                                            </>
                                        }
                                        className={classes.listItemText}
                                    />
                                </ListItem>
                            </List>
                        </Box>
                    </Grid>

                    {/* Text on right */}
                    <Grid item xs={12} md={6}>
                        <Box className={classes.textContent}>
                            <Typography variant="h4" className={classes.title}>
                                Ice Cream & Coffee Food Truck
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                style={{ fontStyle: "italic", color: "#a0a1a8ff", marginBottom: 8 }}
                            >
                                — Rolling Up with Smiles Valley-Wide —
                            </Typography>
                            <Typography className={classes.subtext}>
                                Ice Cream Sociables’ new food truck brings the joy of a full-service sundae bar and barista-quality coffee to any event across the Phoenix valley. Our Ice Cream Socialites, dressed in iconic 50s-style gear, deliver a unique and memorable experience with top-tier service.
                            </Typography>
                            <Typography className={classes.subtext}>
                                Whether it’s a morning corporate meeting, a wedding, a festival, or a late-night party, we roll up on time, ready to serve. From premium lattes to build-your-own sundaes, we’ve got something to make everyone smile.
                            </Typography>
                            <List className={classes.bulletList}>
                                <Typography className={classes.sectionHeader}>
                                    Premium Coffee Offerings:
                                </Typography>
                                {["Lattes", "Cappuccinos", "Frappuccinos", "Macchiatos", "Espresso Shots"].map((item, i) => (
                                    <ListItem key={`coffee-${i}`} className={classes.listItem}>
                                        <ListItemText primary={`- ${item}`} className={classes.listItemText} />
                                    </ListItem>
                                ))}
                                <Typography className={classes.sectionHeader}>
                                    Sundae Bar Delights:
                                </Typography>
                                {["Build-your-own Sundae Bar", "Waffle Cones & Bowls", "Toppings for Days", "Vegan & Dairy-Free Options", "Italian Ice"].map((item, i) => (
                                    <ListItem key={`icecream-${i}`} className={classes.listItem}>
                                        <ListItemText primary={`- ${item}`} className={classes.listItemText} />
                                    </ListItem>
                                ))}
                            </List>
                            <Box className={classes.buttonGroup}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.ctaButton}
                                    component={Link}
                                    to="/contact"
                                    aria-label="Get a quote for the Food Truck Experience"
                                >
                                    Get a Quote
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    className={classes.secondaryButton}
                                    href="tel:+16026386510"
                                    aria-label="Call now to book the Food Truck Experience"
                                >
                                    (602) 638-6510
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default IceCreamFoodTruck;
