import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4),
        paddingBottom: 0,
        color: "#fff",
        maxWidth: 1200,
        margin: "auto",
        marginTop: 70,
        [theme.breakpoints.down('lg')]: {
            maxWidth: 1050,
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2),
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: 80,
        },
    },
    header: {
        marginBottom: theme.spacing(6),
        textAlign: "center",
        [theme.breakpoints.down('xs')]: {
            textAlign: "left",
        },
    },
    titleBox: {
        width: 985,
        margin: 'auto',
        marginBottom: 100,
        [theme.breakpoints.down('md')]: {
            width: '80%',
            marginLeft: '10%',
            marginBottom: 100,
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginLeft: '0%',
            marginTop: -100,
            marginBottom: 75,
        },
    },
    title: {
        marginTop: 100,
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 28,
        color: '#fff',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 600,
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5em'
        },
        [theme.breakpoints.down('xs')]: {
            textAlign: 'left',
            marginTop: 150,
            fontSize: '1.4em'
        },
    },
    sectionContainer: {
        marginBottom: theme.spacing(6),
    },

    /* used in hero intro link */
    phoneLink: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '1.5em',
        fontWeight: 600,
        fontFamily: 'serif',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.2em',
        },
    },
    subTextBox: {
        width: '86%',
        marginLeft: '7%',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginLeft: '0%',
        },
    },
    subText: {
        fontSize: '1.2em',
        fontWeight: 500,
        marginTop: 40,
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.2em',
            textAlign: 'left',
        },
    },

    /* styled card container */
    mainGridContainer: {
        borderRadius: 8,
        overflow: 'hidden',
        boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
        [theme.breakpoints.down('md')]: {
            maxWidth: 850,
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: 0,
            marginBottom: 0,
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: 0,
        },
    },
    topGridItem: {
        backgroundColor: 'white',
        background: 'linear-gradient(90deg, #2063cc 0%, #2166d3 40%, #2c85ea 100%)',
        padding: '20px 30px',
        borderBottom: '2px solid #efefef',
        color: '#ecececff',
        height: 80,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        fontSize: '.8rem',
        [theme.breakpoints.down('xs')]: {
            // padding: '20px 20px',
            // height: 60,
            display: 'none',
        },
    },
    viewOptions: {
        cursor: 'pointer',
        [theme.breakpoints.down('xs')]: {
            fontSize: 'smaller'
        },
    },
    imageGridContainer: {
        minWidth: '300px',
        borderRight: '2px solid #efefef',
        padding: 50,
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            padding: '25px 25px 10px'
        },
        [theme.breakpoints.down('sm')]: {
            padding: '50px 50px 10px'
        },
        [theme.breakpoints.down('xs')]: {
            padding: '25px 25px 0px',
            borderRight: 'none !important',
        },
    },
    imageStyles: {
        width: '100%',
        maxHeight: 300,
        objectFit: 'contain',
        borderRadius: '8px !important',
    },
    descriptionContainer: {
        fontFamily: 'Raleway, sans-serif',
        padding: 39,
        fontSize: '.8rem',
        color: "black",
        [theme.breakpoints.down('sm')]: {
            paddingTop: '10px',
            paddingLeft: '50px',
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: 25,
            paddingRight: 25,
        },
    },
    /* sectionTitle used inside each card */
    sectionTitle: {
        color: '#000000',
        fontFamily: 'Raleway, sans-serif',
        fontWeight: '600',
        paddingTop: '15px',
        margin: '0',
        fontSize: '2rem',
        lineHeight: '1',
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.4rem',
            marginBottom: 5,
        },
    },
    subTitle: {
        margin: '6px 0 0px 0',
        fontFamily: 'Raleway, sans-serif',
        fontSize: '.8rem',
        color: '#515151',
        fontStyle: 'italic',
    },
    description: {
        fontFamily: 'Raleway, sans-serif',
        paddingLeft: "0px !important",
        paddingRight: "0px !important",
        paddingBottom: 8,
        fontSize: '1rem',
    },

    /* bullets within cards */
    bulletList: {
        marginBottom: 0,
        paddingLeft: 5,
        marginTop: 15,
        fontSize: '1.1em',
        [theme.breakpoints.down('xs')]: {
            marginTop: 0,
            paddingLeft: 20,
            marginBottom: -17
        },
    },
    lastCard: {
        paddingBottom: '0px !important',
        [theme.breakpoints.down('xs')]: {
            paddingBottom: '10px !important',
        },
    },
    listItem: {
        padding: 0,
        paddingBottom: 5,
        alignItems: 'center',
        '& .MuiListItemText-primary': {
            lineHeight: '1.2em',
            fontSize: '1em',
        },
        [theme.breakpoints.down('xs')]: {
            marginLeft: -20,
        },
    },
    icon: {
        color: "#66bb6a",
        fontSize: '1.2rem',
        minWidth: 24,
        marginLeft: 20,
    },

    /* bottom button bar */
    buttonView: {
        height: 85,
        backgroundColor: '#edf0f8',
        borderTop: '2px solid #efefef',
        display: 'flex',
        justifyItems: 'center',
        alignItems: 'center',
    },
    buttonGroup: {
        display: 'flex',
        justifyContent: 'right',
        marginRight: '30px !important',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'center',
            marginRight: "0px !important",
        },
    },
    viewOptionsButton: {
        width: 160,
        height: 40,
        fontSize: '.7em',
        color: '#ffffff',
        borderRadius: 5,
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.15)',
        background: 'linear-gradient(90deg, #2063cc 0%, #2166d3 40%, #2c85ea 100%)',
        backgroundColor: '#3240ff',
        '&:hover': {
            background: 'linear-gradient(90deg, #0D47A1 0%, #0D47A1 40%, #1565C0 100%)',
            boxShadow: 'unset',
            border: 0,
        },
    },
}));

export default useStyles;
