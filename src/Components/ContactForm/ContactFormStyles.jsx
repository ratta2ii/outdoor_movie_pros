import { makeStyles } from '@material-ui/core/styles';
import MoviePostersBackground from './../../Assets/Images/movie_posters_background.webp';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 650,
        [theme.breakpoints.down('md')]: {
            maxWidth: 575,
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: 100,
            marginBottom: -25,
        },
    },
    form: {
        padding: 12,
        background: `url(${MoviePostersBackground}) center / contain`,
        [theme.breakpoints.down('md')]: {
            maxWidth: '550px',
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: '550px',
            margin: '60px auto 60px',
        },
        [theme.breakpoints.down('xs')]: {
            padding: 0,
            marginTop: -85,
            width: '100%',
            maxWidth: '420px',
            margin: '10% auto',
        },
    },
    paper: {
        padding: '25px',
        backgroundColor: '#eaeaea',
    },
    formMessage: {
        fontWeight: 700,
        fontSize: '1em',
        margin: '5% 5% 10%',
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            fontSize: '.8em',
        },
    },
    formResetButton: {
        backgroundColor: '#4b739b',
        color: '#fff',
        '&:hover, &:focus': {
            backgroundColor: '#3a5978',
            boxShadow: 'none',
        },
    },
    formSubmitButton: {
        width: 125,
        float: 'right',
        marginRight: 10,
        textDecoration: 'none',
        color: '#fff',
        height: 40,
        fontSize: '.7em',
        borderRadius: 5,
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.15) !important',
        background: 'linear-gradient(90deg, #2063cc 0%, #2166d3 40%, #2c85ea 100%)',
        '&:hover, &:focus': {
            background: 'linear-gradient(90deg, #0D47A1 0%, #0D47A1 40%, #1565C0 100%)',
            boxShadow: 'none !important',
        },
        [theme.breakpoints.down('xs')]: {
            marginRight: 0,
            width: '100%',
        },
    },
}));

export default useStyles;