import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CompanyLogo from './../../Assets/Images/company-logo.webp';
import WhiteCompanyLogo from './../../Assets/Images/white-company-logo.webp';
import HomeIcon from '@mui/icons-material/Home';
import MovieIcon from '@mui/icons-material/MovieRounded';
import ConcessionsIcon from '@mui/icons-material/MenuBookRounded';
import CoffeeIcon from '@mui/icons-material/EmojiFoodBeverageRounded';
import FaqsIcon from '@mui/icons-material/LiveHelpRounded';
import GalleryIcon from '@mui/icons-material/CollectionsRounded';
import ContactMailIcon from '@mui/icons-material/ContactMail';
// import IceCreamIcon from '@mui/icons-material/IcecreamRounded';
// import CancelIcon from '@mui/icons-material/Cancel';
import { Link, useLocation } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

const drawerWidth = 260;

function NavBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const isMobile = useMediaQuery('(max-width:850px)');
    const location = useLocation();

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <nav onClick={handleDrawerToggle} style={{ textAlign: 'center', backgroundColor: '#ffffff' }}>
            <img
                src={WhiteCompanyLogo}
                alt='Outdoor Movie Pros logo'
                style={{ width: '90px', marginTop: 20, marginBottom: 10 }}
                loading="lazy"
            />
            <Divider />
            <Box sx={{ backgroundColor: '#f5f5f5' }}>
                <List disablePadding>
                    {/* Home */}
                    <ListItem disablePadding disableGutters sx={{ padding: 0, margin: 0 }}>
                        <Link to='/' style={{ textDecoration: 'none', width: '100%' }}>
                            <ListItemButton
                                style={{
                                    textAlign: 'center',
                                    borderLeft: location.pathname === '/' ? '8px solid red' : '8px solid transparent',
                                    backgroundColor: location.pathname === '/' ? '#e0e0e0' : 'transparent',
                              padding: '20px 15px',
                                    textTransform: 'none',
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                    <HomeIcon fontSize='medium' style={{ marginRight: '10px', color: '#1a3890', flexShrink: 0 }} />
                                    <p style={{ fontSize: "1em", fontWeight: 500, margin: 0, flexGrow: 1, textAlign: 'left' }}>Home</p>
                                </Box>
                            </ListItemButton>
                        </Link>
                    </ListItem>

                    {/* Movie Night Options */}
                    <ListItem disablePadding disableGutters sx={{ padding: 0, margin: 0 }}>
                        <Link to='/movie-nights-options' style={{ textDecoration: 'none', width: '100%' }}>
                            <ListItemButton
                                style={{
                                    textAlign: 'center',
                                    borderLeft: location.pathname === '/movie-nights-options' ? '8px solid red' : '8px solid transparent',
                                    backgroundColor: location.pathname === '/movie-nights-options' ? '#e0e0e0' : 'transparent',
                              padding: '20px 15px',
                                    textTransform: 'none',
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                    <MovieIcon fontSize='medium' style={{ marginRight: '10px', color: '#1a3890', flexShrink: 0 }} />
                                    <p style={{ fontSize: "1em", fontWeight: 500, margin: 0, flexGrow: 1, textAlign: 'left' }}>Movie Night Options</p>
                                </Box>
                            </ListItemButton>
                        </Link>
                    </ListItem>

                    {/* Concessions & Add-ons */}
                    <ListItem disablePadding disableGutters sx={{ padding: 0, margin: 0 }}>
                        <Link to='/concessions-options' style={{ textDecoration: 'none', width: '100%' }}>
                            <ListItemButton
                                style={{
                                    textAlign: 'center',
                                    borderLeft: location.pathname === '/concessions-options' ? '8px solid red' : '8px solid transparent',
                                    backgroundColor: location.pathname === '/concessions-options' ? '#e0e0e0' : 'transparent',
                              padding: '20px 15px',
                                    textTransform: 'none',
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                    <ConcessionsIcon fontSize='medium' style={{ marginRight: '10px', color: '#1a3890', flexShrink: 0 }} />
                                    <p style={{ fontSize: "1em", fontWeight: 500, margin: 0, flexGrow: 1, textAlign: 'left' }}>Concessions & Add-Ons</p>
                                </Box>
                            </ListItemButton>
                        </Link>
                    </ListItem>

                    {/* Ice Cream Food Truck */}
                    <ListItem disablePadding disableGutters sx={{ padding: 0, margin: 0 }}>
                        <Link to='/ice-cream-food-truck' style={{ textDecoration: 'none', width: '100%' }}>
                            <ListItemButton
                                style={{
                                    textAlign: 'center',
                                    borderLeft: location.pathname === '/ice-cream-food-truck' ? '8px solid red' : '8px solid transparent',
                                    backgroundColor: location.pathname === '/ice-cream-food-truck' ? '#e0e0e0' : 'transparent',
                              padding: '20px 15px',
                                    textTransform: 'none',
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                    <CoffeeIcon fontSize='medium' style={{ marginRight: '10px', color: '#1a3890', flexShrink: 0 }} />
                                    <p style={{ fontSize: "1em", fontWeight: 500, margin: 0, flexGrow: 1, textAlign: 'left' }}>Ice Cream Sundae & Barista Coffee Food Truck</p>
                                </Box>
                            </ListItemButton>
                        </Link>
                    </ListItem>

                    {/* FAQs */}
                    <ListItem disablePadding disableGutters sx={{ padding: 0, margin: 0 }}>
                        <Link to='/faqs' style={{ textDecoration: 'none', width: '100%' }}>
                            <ListItemButton
                                style={{
                                    textAlign: 'center',
                                    borderLeft: location.pathname === '/faqs' ? '8px solid red' : '8px solid transparent',
                                    backgroundColor: location.pathname === '/faqs' ? '#e0e0e0' : 'transparent',
                              padding: '20px 15px',
                                    textTransform: 'none',
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                    <FaqsIcon fontSize='medium' style={{ marginRight: '10px', color: '#114796', flexShrink: 0 }} />
                                    <p style={{ fontSize: "1em", fontWeight: 500, margin: 0, flexGrow: 1, textAlign: 'left' }}>FAQs</p>
                                </Box>
                            </ListItemButton>
                        </Link>
                    </ListItem>

                    {/* Gallery */}
                    <ListItem disablePadding disableGutters sx={{ padding: 0, margin: 0 }}>
                        <Link to='/gallery' style={{ textDecoration: 'none', width: '100%' }}>
                            <ListItemButton
                                style={{
                                    textAlign: 'center',
                                    borderLeft: location.pathname === '/gallery' ? '8px solid red' : '8px solid transparent',
                                    backgroundColor: location.pathname === '/gallery' ? '#e0e0e0' : 'transparent',
                              padding: '20px 15px',
                                    textTransform: 'none',
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                    <GalleryIcon fontSize='medium' style={{ marginRight: '10px', color: '#114796', flexShrink: 0 }} />
                                    <p style={{ fontSize: "1em", fontWeight: 500, margin: 0, flexGrow: 1, textAlign: 'left' }}>Image Gallery</p>
                                </Box>
                            </ListItemButton>
                        </Link>
                    </ListItem>

                    {/* Contact */}
                    <ListItem disablePadding disableGutters sx={{ padding: 0, margin: 0 }}>
                        <Link to='/contact' style={{ textDecoration: 'none', width: '100%' }}>
                            <ListItemButton
                                style={{
                                    textAlign: 'center',
                                    borderLeft: location.pathname === '/contact' ? '8px solid red' : '8px solid transparent',
                                    backgroundColor: location.pathname === '/contact' ? '#e0e0e0' : 'transparent',
                              padding: '20px 15px',
                                    textTransform: 'none',
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                    <ContactMailIcon fontSize='medium' style={{ marginRight: '10px', color: '#114796', flexShrink: 0 }} />
                                    <p style={{ fontSize: "1em", fontWeight: 500, margin: 0, flexGrow: 1, textAlign: 'left' }}>Contact</p>
                                </Box>
                            </ListItemButton>
                        </Link>
                    </ListItem>

                    {/* Close */}
                    {/* <ListItem disablePadding disableGutters sx={{ padding: 0, margin: 0 }}>
                        <ListItemButton
                            onClick={(event) => {
                                event.stopPropagation();
                                handleDrawerToggle();
                            }}
                            style={{
                                textAlign: 'center',
                                borderLeft: '8px solid transparent',
                                backgroundColor: 'transparent',
                          padding: '20px 15px',
                                textTransform: 'none',
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                <CancelIcon fontSize='medium' style={{ marginRight: '10px', color: '#1a3890', flexShrink: 0 }} />
                                <p style={{ fontSize: "1em", fontWeight: 500, margin: 0, flexGrow: 1, textAlign: 'left' }}>Close</p>
                            </Box>
                        </ListItemButton>
                    </ListItem> */}
                </List>
            </Box>
        </nav>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <nav style={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" style={{ backgroundColor: '#0b0f18', minHeight: 80, paddingTop: 12, borderBottom: "5px solid #182134" }}>
                {isMobile ? (
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        {/* Hamburger */}
                        <Box sx={{ display: 'flex', alignItems: 'center', width: '12%' }}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ ml: .5 }}
                            >
                                <MenuIcon sx={{ fontSize: '2.5rem' }} />
                            </IconButton>
                        </Box>

                        {/* Phone number centered */}
                        <Box sx={{ width: '66%', textAlign: 'center' }}>
                            <Typography variant="body1" sx={{ fontFamily: 'sans-serif', fontSize: '1.1em' }}>
                                <a href="tel:+16026386510" style={{ textDecoration: "none", color: "inherit" }}>
                                    +1 (602) 638-6510
                                </a>
                            </Typography>
                        </Box>

                        {/* Logo right aligned */}
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '22%', pr: .5 }}>
                            <Link to="/">
                                <img
                                    src={CompanyLogo}
                                    width="75"
                                    alt="Outdoor Movie Pros logo"
                                    loading="lazy"
                                />
                            </Link>
                        </Box>
                    </Toolbar>
                ) : (
                    <Toolbar>
                        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                            <Link to='/'>
                                <img
                                    src={CompanyLogo}
                                    width="90"
                                    alt='Outdoor Movie Pros logo'
                                    style={{ margin: "15px 25px 25px 10px" }}
                                    loading="lazy"
                                />
                            </Link>
                            <Typography variant="body1" style={{ fontFamily: "sans-serif", fontSize: "1.2em" }}>
                                <a href="tel:+16026386510" style={{ textDecoration: "none", color: "inherit" }}>
                                    +1 (602) 638-6510
                                </a>
                            </Typography>
                        </Box>

                        {/* Desktop links (no Locations) */}
                        <Box sx={{ display: 'flex' }}>
                            <Link to='/'><Button sx={{ color: '#fff', mx: 1 }}>Home</Button></Link>
                            <Link to='/faqs'><Button sx={{ color: '#fff', mx: 1 }}>FAQs</Button></Link>
                            <Link to='/gallery'><Button sx={{ color: '#fff', mx: 1 }}>Gallery</Button></Link>
                            <Link to='/contact'><Button sx={{ color: '#fff', mx: 1 }}>Contact</Button></Link>
                        </Box>
                    </Toolbar>
                )}
            </AppBar>

            <Box component="nav">
                {isMobile && (
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{ keepMounted: true }}
                        sx={{ '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth } }}
                    >
                        {drawer}
                    </Drawer>
                )}
            </Box>
        </nav>
    );
}

export default NavBar;
