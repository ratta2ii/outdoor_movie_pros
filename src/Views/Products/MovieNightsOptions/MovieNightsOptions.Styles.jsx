import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    gridContainer: {
        padding: '0 14%',
        // 1200px – 2300px
        '@media (min-width: 1200px) and (max-width: 2500px)': {
            padding: '0 10%', // equivalent to ~6% at 1200px
        },
        [theme.breakpoints.down('lg')]: {
            padding: 0,
        },
        [theme.breakpoints.down('sm')]: {
            padding: '0 10%',
        },
        [theme.breakpoints.down('xs')]: {
            padding: 0,
        },
    },
    titleBox: {
        // marginTop: 200,
        // marginBottom: 150,
        width: 985,
        margin: '230px auto 120px',
        [theme.breakpoints.down('md')]: {
            width: '80%',
            marginLeft: '10%',
            marginBottom: 100,
        },
        [theme.breakpoints.down('xs')]: {
            width: '96%',
            marginLeft: '2%',
            marginTop: 145,
            marginBottom: 75,
        },
    },
    title: {
        marginTop: 100,
        marginBottom: 20,
        textAlign: 'center',
        fontSize: '1.8em',
        color: '#fff',
        fontFamily: '"Segoe UI", "Helvetica", "Arial", sans-serif',
        fontWeight: 600,
        lineHeight: 'normal',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5em'
        },
        [theme.breakpoints.down('xs')]: {
            textAlign: 'left',
            fontSize: '1.4em'
        },
    },
    subTitle: {
        textAlign: 'center',
        color: '#fff',
        width: '70%',
        marginLeft: '15%',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', 'Liberation Sans', Arial, sans-serif",
        marginTop: 10,
        marginBottom: 20,
        fontWeight: 400,
        fontSize: '1.3em',
        fontStyle: 'italic',
        [theme.breakpoints.down('sm')]: {
            width: '90%',
            marginLeft: '5%',
            fontSize: '1.2em',
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginLeft: '0%',
            textAlign: 'left',
            marginTop: 40,
            marginBottom: 40,
        },
    },
    card: {
        borderRadius: 10,
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        backgroundColor: '#101623  !important',
        [theme.breakpoints.down('md')]: {
            padding: 30
        },
        [theme.breakpoints.down('sm')]: {
            padding: 40
        },
        [theme.breakpoints.down('xs')]: {
            backgroundColor: '#192132  !important',
            padding: 20,
        },
    },
    cardTitle: {
        fontWeight: "600 !important",
        fontSize: '2em !important',
        marginBottom: '6px !important',
        color: "#fff",
        [theme.breakpoints.down('xs')]: {
            fontSize: '2.3em !important',

        },
    },
    cardSubtitle: {
        color: '#6a7280',
        fontSize: '1.2em !important',
        fontStyle: 'italic',
        fontWeight: 600,
    },
    bulletList: {
        marginBottom: 25,
        paddingLeft: 16,
        marginTop: 15,
        fontSize: '1.2em',
        color: '#fff',
        [theme.breakpoints.down('xs')]: {
            paddingLeft: 8,
        },
    },
    cardPrice: {
        display: 'inline-block',
        color: "#fff",
        fontSize: '30px !important',
        marginTop: "20px !important",
        marginBottom: "6px !important",
    },
    quoteNote: {
        color: "#fff !important",
        fontStyle: 'italic',
        marginTop: 20,
        fontSize: '0.9em',
    },
    addOnsLink: {
        color: "#67adfc",
        textDecoration: 'underline',
        marginBottom: -10,
    },
    listItem: {
        padding: 0,
        paddingBottom: "0px !important",
        alignItems: 'center',
        '& .MuiListItemText-primary': {
            marginLeft: -30,
            lineHeight: '1.2em',
        },
    },
    icon: {
        color: "#66bb6a",
        fontSize: '1.4rem',
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
        width: '50%',
        minWidth: 130,
        textDecoration: 'none',
        color: '#fff !important',
        height: 40,
        fontSize: '.7em !important',
        borderRadius: 5,
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.15) !important',
        '&:first-of-type': {
            background: 'linear-gradient(90deg, #2063cc 0%, #2166d3 40%, #2c85ea 100%)',
            borderRight: '3px solid rgb(12 15 24 / 75%)',
            '&:hover, &:focus': {
                background: 'linear-gradient(90deg, #0D47A1 0%, #0D47A1 40%, #1565C0 100%)',
                boxShadow: 'none !important',
            },

        },
        '&:last-of-type': {
            background: 'linear-gradient(90deg, #0D47A1 0%, #0D47A1 40%, #1565C0 100%)',
            borderLeft: '3px solid rgb(12 15 24 / 75%)',
            '&:hover, &:focus': {
                background: 'linear-gradient(90deg, #2063cc 0%, #2166d3 40%, #2c85ea 100%)',
                boxShadow: 'none !important',
            },
        },
    },
    infoSection: {
        marginTop: "115px !important",
        marginBottom: "-40px !important",
        [theme.breakpoints.down('xs')]: {
            marginTop: "60px !important",
            marginBottom: "50px !important",
        }
    },
    infoTitle: {
        fontSize: '2.4em !important',
        marginBottom: "25px !important",
        [theme.breakpoints.down('xs')]: {
            fontSize: '2em !important',
            marginBottom: "25px !important",

        }
    },
    infoList: {
        margin: "0px !important",
        padding: "0px !important",
    },
}));

export default useStyles;
