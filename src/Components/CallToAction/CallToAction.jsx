import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography, Grid } from "@material-ui/core";
import InsuranceSeal from './../../Assets/Images/insurance-seal.webp';
import EmailIcon from "@material-ui/icons/Email";
import useStyles from "./CallToAction.Styles";


function CallToAction() {
    const classes = useStyles();

    return (
        <Box className={classes.ctaBox}>
            <Typography variant="h5" className={classes.ctaText}>
                Ready to schedule your event? Contact us today!
            </Typography>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item>
                    <img
                        src={InsuranceSeal}
                        alt="Outdoor Movie Pros is Licensed and Insured"
                        className={classes.ctaImage}
                        loading="lazy"
                        data-ratio='407 / 247'
                    />
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        size="medium"
                        component={Link}
                        to="/contact"
                        className={classes.ctaButton}
                        startIcon={<EmailIcon />}
                    >
                        Contact Us
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default CallToAction;
