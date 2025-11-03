import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    ctaBox: {
        maxWidth: 580,
        margin: "150px auto 150px auto",
        textAlign: "center",
        padding: '25px 10px 15px 10px',
        background: 'linear-gradient(0deg, #ff69b4 0%, #3240ff 100%)',
        borderRadius: 8,
        [theme.breakpoints.down('xs')]: {
            margin: "50px auto 50px auto",
            width: "100%",
            maxWidth: 350,
        },
    },
    ctaText: {
        marginBottom: theme.spacing(2),
        fontWeight: 600,
        fontSize: "1.3em",
        color: "#fff",
        [theme.breakpoints.down('xs')]: {
            fontSize: "1.2em",
        },
    },
    ctaImage: {
        width: 100, 
        height: 100,
    },
    ctaButton: {
        fontSize: ".7em",
        padding: "8px 20px",
        borderRadius: 5,
        color: '#ffffff',
        height: 40,
        backgroundColor: '#3240ff', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.15)',
        '&:hover': {
            boxShadow: 'unset',
            border: 0,
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: ".7em",
        },
    },
}));

export default useStyles;
