import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down('sm')]: {
            padding: "0px 8%",
        },
        [theme.breakpoints.down('xs')]: {
            padding: 0
        },
    },
    card: {
        borderRadius: 10,
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            padding: 40
        },
        [theme.breakpoints.down('xs')]: {
            padding: 10
        },
    },
    cardTitle: {
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', 'Liberation Sans', Arial, sans-serif !important",
        fontWeight: "600 !important",
        fontSize: '2em !important',
        marginBottom: '6px !important',
        color: "#2b2b2b",
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            fontSize: '2em !important',

        },
    },
    cardSubtitle: {
        color: '#ba4419',
        fontSize: '1.3em !important',
        fontWeight: 600,
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.2em !important',
        },
    },
    bulletList: {
        marginBottom: 25,
        paddingLeft: 16,
        marginTop: 15,
        fontSize: '1.2em',
        [theme.breakpoints.down('xs')]: {
            paddingLeft: 8,
        },
    },
    listItem: {
        padding: 0,
        paddingBottom: '0px !important',
        alignItems: 'center',
        '& .MuiListItemText-primary': {
            marginLeft: -30,
            lineHeight: '1.2em',
        },
    },
    icon: {
        color: "#66bb6a",
        fontSize: '1.3rem',
        minWidth: 24,
        marginLeft: -10,
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 60,
        gap: '0px',
        flexWrap: 'wrap',
        padding: 0,
    },
    contactButton: {
        color: '#fff !important',
        fontWeight: 600,
        height: 45,
        fontSize: '.7em !important',
        borderRadius: 5,
        width: '95% !important',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.15) !important',
        background: 'linear-gradient(90deg, #2063cc 0%, #2166d3 40%, #2c85ea 100%)',
        '&:hover, &:focus': {
            background: 'linear-gradient(90deg, #0D47A1 0%, #0D47A1 40%, #1565C0 100%)',
            boxShadow: 'none !important',
        },
        [theme.breakpoints.down('xs')]: {
            height: 40,
        },
    },
    images: {
        width: '100%',
        borderRadius: 8,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        height: "275px !important",
        objectFit: 'cover',
        objectPosition: 'center',
        [theme.breakpoints.down('lg')]: {
            height: "252px !important",
        },
        [theme.breakpoints.down('md')]: {
            height: "285px !important",
        },
        [theme.breakpoints.down('sm')]: {
            height: '100% !important',
            minHeight: '250px !important',
        },
        [theme.breakpoints.down('xs')]: {
            minHeight: '200px !important',
        },
    },
    imageContainer: {
        padding: 12,
        paddingBottom: 5,
    },
    divider: {
        height: 2,
        backgroundColor: '#e0e0e0',
        margin: '20px 0px 5px 0px',
        // [theme.breakpoints.down('lg')]: {

        // },
        // [theme.breakpoints.down('md')]: {

        // },
        // [theme.breakpoints.down('sm')]: {

        // },
        [theme.breakpoints.down('xs')]: {
            margin: '18px 0px 3px 0px',
        },
    }
}));

export default useStyles;
