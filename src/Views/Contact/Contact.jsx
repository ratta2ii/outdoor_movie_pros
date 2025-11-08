import React from "react";
import { Helmet } from 'react-helmet';
import ContactForm from "../../Components/ContactForm/ContactForm";
import useStyles from "./Contact.Styles";
import { Typography, Box, Button } from "@material-ui/core";
import CallIcon from '@mui/icons-material/Call';

function Contact() {
    const classes = useStyles();
    const canonicalUrl = "https://outdoormoviepros.com/contact";

    return (
        <section>
            <Helmet>
                {/* Core SEO */}
                <title>Get a Quote | Outdoor Movie Screen Rentals in Phoenix</title>
                <meta
                    name="description"
                    content="Request a fast quote for inflatable outdoor movie screen rentals in Phoenix and nearby cities. HD projector, pro sound, delivery, setup, on-site tech, and teardown."
                />
                <meta name="keywords" content="outdoor movie quote phoenix, inflatable screen rental phoenix, backyard movie night phoenix, get quote phoenix" />
                <link rel="canonical" href={canonicalUrl} />

                {/* Open Graph — MINIMAL OVERRIDE (like all other pages) */}
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content="Get a Quote | Outdoor Movie Screen Rentals in Phoenix" />
                <meta
                    property="og:description"
                    content="Fast quote for inflatable outdoor movie screen rentals in Phoenix. HD projector, pro audio, delivery, setup, and on-site tech included."
                />

                {/* Twitter — MINIMAL OVERRIDE */}
                <meta name="twitter:title" content="Get a Quote | Outdoor Movie Screen Rentals in Phoenix" />
                <meta
                    name="twitter:description"
                    content="Request a quote for outdoor movie rentals in Phoenix — full setup, projector, sound, and tech included."
                />

                {/* JSON-LD: WebPage — SLASH BEFORE #, HARD-CODED */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "WebPage",
                                "@id": `${canonicalUrl}/#webpage`,
                                "url": canonicalUrl,
                                "name": "Get a Quote | Outdoor Movie Screen Rentals in Phoenix",
                                "description": "Request a fast quote for inflatable outdoor movie screen rentals in Phoenix and nearby cities. HD projector, pro sound, delivery, setup, on-site tech, and teardown.",
                                "isPartOf": { "@id": "https://outdoormoviepros.com/#website" },
                                "about": { "@id": "https://outdoormoviepros.com/#business" },
                                "breadcrumb": {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://outdoormoviepros.com" },
                                        { "@type": "ListItem", "position": 2, "name": "Contact", "item": canonicalUrl }
                                    ]
                                }
                            }
                        ]
                    })}
                </script>
            </Helmet>

            {/* sr-only heading for SEO/a11y */}
            <h1 className="sr-only">
                Contact us for inflatable outdoor movie screen rentals in Phoenix, AZ — fast quotes, full setup, HD projector, pro sound
            </h1>

            <main className={classes.root}>
                <div className={classes.titleBox}>
                    <Typography variant="h1" className={classes.title}>
                        Contact Outdoor Movie Pros — Phoenix Outdoor Movie Screen Rentals
                    </Typography>
                    <Typography variant="h2" className={classes.subTitle}>
                        Request a quote or ask about setup options for your backyard, park, or corporate movie night. Looking for extras? See our{" "}
                        <a href="/concessions-options" style={{ color: "#67adfcff", textDecoration: "underline" }}>Concessions & Add-Ons</a>{" "}
                        and{" "}
                        <a href="/ice-cream-food-truck" style={{ color: "#67adfcff", textDecoration: "underline" }}>Ice Cream & Coffee Food Truck</a>.
                    </Typography>

                    <Box className={classes.infoBox}>
                        <Typography variant="body1" className={classes.infoText}>
                            <strong>Company:</strong>{' '}Outdoor Movie Pros
                        </Typography>

                        <Typography variant="body1" className={classes.infoText}>
                            <strong>Phone:</strong>{' '}
                            <Button
                                variant="contained"
                                color="primary"
                                size="small"
                                href="tel:+16026386510"
                                className={classes.phoneButton}
                                startIcon={<CallIcon />}
                            >
                                (602) 638-6510
                            </Button>
                        </Typography>

                        <Typography variant="body1" className={classes.infoText}>
                            <strong>Email:</strong>{' '}
                            <a href="mailto:info@outdoormoviepros.com">info@outdoormoviepros.com</a>
                        </Typography>

                        <Typography variant="body1" className={classes.infoText}>
                            <strong>Website:</strong>{' '}
                            <a href="https://outdoormoviepros.com" target="_blank" rel="noopener noreferrer">outdoormoviepros.com</a>
                        </Typography>
                    </Box>

                    <Box className={classes.formWrapper}>
                        <ContactForm />
                    </Box>
                </div>
            </main>
        </section>
    );
}

export default Contact;
