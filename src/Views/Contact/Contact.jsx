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
                <title>Contact Outdoor Movie Pros | Outdoor Movies, Concessions & Food Truck in Phoenix</title>
                <meta
                    name="description"
                    content="Contact Outdoor Movie Pros for outdoor movie rentals, concessions, and a food truck serving ice cream sundaes and coffee in Phoenix, AZ. Fast quotes and friendly help."
                />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://outdoormoviepros.com/contact" />

                {/* Open Graph */}
                <meta property="og:title" content="Contact Outdoor Movie Pros | Outdoor Movies, Concessions & Food Truck in Phoenix" />
                <meta
                    property="og:description"
                    content="Get in touch for outdoor movie rentals, concessions, and a food truck with ice cream sundaes and coffee in Phoenix. Fast quotes and friendly help."
                />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Outdoor Movie Pros" />
                <meta property="og:url" content="https://outdoormoviepros.com/contact" />
                <meta property="og:image" content="https://outdoormoviepros.com/company-logo.webp" />
                <meta property="og:image:alt" content="Outdoor Movie Pros logo" />
                <meta name="author" content="Outdoor Movie Pros" />
            </Helmet>

            <header className="sr-only">
                <h1>Contact Outdoor Movie Pros — outdoor movie rentals, concessions, and a food truck with ice cream sundaes and coffee in Phoenix, AZ</h1>
                <h2>Fast quotes for screens, HD projection, pro audio, and full setup & teardown across the Phoenix metro.</h2>
            </header>

            <main className={classes.root}>
                <div className={classes.titleBox}>
                    <Typography variant="h1" className={classes.title}>
                        Contact Outdoor Movie Pros today for professional service and competitive pricing!
                    </Typography>
                    <Typography variant="h2" className={classes.subTitle}>
                        Get your free quote now! Fill out the form below, and our team will respond promptly.
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
