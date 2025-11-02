import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "80vh", // allows vertical centering while accounting for header/footer
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // alignItems: "center",
        padding: theme.spacing(4),
        color: "#fff",
        maxWidth: 935,
        margin: "auto",
        marginTop: 180,
        marginBottom: 50,
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(2),
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: 80,
        },
    },
    title: {
        fontSize: "3.5em",
        fontWeight: 600,
        color: "#fff",
        textAlign: "center",
        marginBottom: 50,
        [theme.breakpoints.down("sm")]: {
            fontSize: "3em",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "2em",
            marginTop: 40,
            marginBottom: 0,
        },
    },
    subheading: {
        fontWeight: 600,
        fontSize: "2em",
        marginTop: 35,
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.5em",
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: 60,
        },
    },
    ctaBox: {
        marginTop: 35,
        marginBottom: 40,
        [theme.breakpoints.down("xs")]: {
            marginBottom: 0,
        },
    },
    ctaText: {
        fontWeight: 600,
        fontSize: "1.8em",
        marginTop: 20,
        marginBottom: 15,
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.5em",
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: 60,
            fontSize: "1.5em",
        },
    },
    ctaButton: {
        color: '#fff !important',
        height: 45,
        fontSize: '.8em !important',
        borderRadius: 5,
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.15) !important',
        background: 'linear-gradient(90deg, #2063cc 0%, #2166d3 40%, #2c85ea 100%)',
        '&:hover, &:focus': {
            background: 'linear-gradient(90deg, #0D47A1 0%, #0D47A1 40%, #1565C0 100%)',
            boxShadow: 'none !important',
        },
        [theme.breakpoints.down('xs')]: {
            height: 40,
        },
    }

}));

export default useStyles;
