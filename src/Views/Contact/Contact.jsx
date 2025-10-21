import React from "react";
import { Helmet } from 'react-helmet';
import ContactForm from "../../Components/ContactForm/ContactForm";
import useStyles from "./Contact.Styles";
import { Typography, Box, Button } from "@material-ui/core";

function Contact() {
    const classes = useStyles();

    return (
        <section>
            <Helmet>
                {/* Title uses App.js titleTemplate to append brand automatically */}
                <title>Get a Quote | Outdoor Movie Screen Rentals in Phoenix</title>

                <meta
                    name="description"
                    content="Request a fast quote for inflatable outdoor movie screen rentals in Phoenix and nearby cities. HD projector, pro sound, delivery, setup, on-site tech, and teardown."
                />
                <meta name="robots" content="index,follow" />
                <link rel="canonical" href="https://outdoormoviepros.com/contact" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Outdoor Movie Pros" />
                <meta property="og:url" content="https://outdoormoviepros.com/contact" />
                <meta property="og:title" content="Get a Quote | Outdoor Movie Screen Rentals in Phoenix" />
                <meta
                    property="og:description"
                    content="Contact us for inflatable outdoor movie screen rentals—HD projector, pro audio, delivery, setup, on-site tech, and teardown."
                />
                <meta property="og:image" content="https://outdoormoviepros.com/company-logo.webp" />
                <meta property="og:image:alt" content="Outdoor Movie Pros logo" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Get a Quote | Outdoor Movie Screen Rentals in Phoenix" />
                <meta
                    name="twitter:description"
                    content="Fast quote for inflatable outdoor movie screen rentals in Phoenix. Projector, sound, delivery, setup, and on-site tech included."
                />

                <meta name="author" content="Outdoor Movie Pros" />
            </Helmet>

            {/* sr-only header focused strictly on rentals for SEO */}
            <header className="sr-only">
                <h1>Contact us for inflatable outdoor movie screen rentals in Phoenix, AZ</h1>
                <h2>Fast quotes for HD projector, pro sound, delivery, setup, on-site technician, and teardown</h2>
            </header>

            <main className={classes.root}>
                <div className={classes.titleBox}>
                    <Typography variant="h1" className={classes.title}>
                        Contact Outdoor Movie Pros — Phoenix Outdoor Movie Screen Rentals
                    </Typography>
                    <Typography variant="h2" className={classes.subTitle}>
                        Request a quote or ask about setup options for your backyard, park, or corporate movie night. Looking for extras? See our{" "}
                        <a href="/concessions-options" style={{ color: "#4d7cc2ff", textDecoration: "underline" }}>Concessions & Add-Ons</a>{" "}
                        and{" "}
                        <a href="/ice-cream-food-truck" style={{ color: "#4d7cc2ff", textDecoration: "underline" }}>Ice Cream & Coffee Food Truck</a>.
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
