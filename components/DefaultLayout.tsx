import {NextPage} from "next";
import {useState} from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Person2Icon from '@mui/icons-material/Person2';
import MenuIcon from '@mui/icons-material/Menu';

import {useRouter} from "next/navigation";
import Button from "@mui/material/Button";
import {signOut, useSession} from "next-auth/react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Dialog  from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIocn from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InputIcon from "@mui/icons-material/Input";
import OutputIcon from "@mui/icons-material/Output";
import InventoryIcon from '@mui/icons-material/Inventory';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import SettingsIcon from '@mui/icons-material/Settings';

const drawerWidth = 240;

interface DefaultLayoutProps {
    children: React.ReactNode,
    window?: () => Window
}

const DefaultLayout: NextPage<DefaultLayoutProps> = ({children}:DefaultLayoutProps) => {

    const {data, status} = useSession()
    const {push} = useRouter()
    const [mobileOpen, setMobileOpen] = useState(false);

    const [open, setOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSignout = () => {
        handleDialogOpen()
    }

    const handleDialogOpen = () => {
        handleClose()
        setOpen(true);
    };

    const handleDialogClose = () => {
        setOpen(false);
    };



    const drawer = (
        <div>
            <Toolbar>
                <Typography variant="h6" noWrap component="div">

                </Typography>
            </Toolbar>
            <Divider />
            <List subheader={<ListSubheader>/</ListSubheader>}>
                <ListItemButton onClick={() => push('/')}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Home'} />
                </ListItemButton>
                <ListItemButton onClick={() => push('/dashboard')}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Dashboard'} />
                </ListItemButton>
            </List>
            {/*<List subheader={<ListSubheader>INVENTORY</ListSubheader>}>*/}
            {/*</List>*/}
            {/*<List subheader={<ListSubheader>RECEPTION</ListSubheader>}>*/}
            {/*</List>*/}
            {/*<List subheader={<ListSubheader>DISPATCH</ListSubheader>}>*/}
            {/*</List>*/}
            <List subheader={<ListSubheader>Operation</ListSubheader>}>
                <ListItemButton>
                    <ListItemIcon>
                        <InventoryIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Inventory'} />
                    <ExpandMoreIcon />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <InputIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Reception'} />
                    <ExpandMoreIcon />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <OutputIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Dispatch'} />
                    <ExpandMoreIcon />
                </ListItemButton>
            </List>
            <List subheader={<ListSubheader>Reports</ListSubheader>}>
            </List>
            <List subheader={<ListSubheader>Settings</ListSubheader>}>

                <ListItemButton onClick={() => push('/users')}>
                    <ListItemIcon>
                        <Person2Icon />
                    </ListItemIcon>
                    <ListItemText primary={'Users'} />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <PrecisionManufacturingIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Equipment'} />
                    <ExpandMoreIcon />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary={'Setting'} />
                    <ExpandMoreIcon />
                </ListItemButton>
            </List>
        </div>
    );

    const logInOutButton = (
        <>
            {data && status === 'authenticated' ? (
                <div>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        elevation={0}
                        sx={{
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgColor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0}
                        }}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => {
                            push('/')
                            handleClose()
                        }}>
                            <ListItemIcon>
                                <Person2Icon />
                            </ListItemIcon>
                            Profile
                        </MenuItem>
                        <MenuItem onClick={() => {
                            push('/users')
                            handleClose()
                        }}>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            Home
                        </MenuItem>
                        <MenuItem onClick={handleSignout}>
                            <ListItemIcon>
                                <LogoutIocn />
                            </ListItemIcon>
                            Signout
                        </MenuItem>
                    </Menu>
                </div>
            ) : null}
        </>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                        ARDVUS, ONPLUX
                    </Typography>
                    <Box>
                        {logInOutButton}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                bgcolor={'#eee'}
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Box height="100vh">
                    {children}
                </Box>
                <footer>
                    <Typography variant={'body2'} color={'text.secondary'} align={'center'}>
                        Copyright 2023. ????.All rights reserved.
                    </Typography>
                </footer>
            </Box>




            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose}>Disagree</Button>
                    <Button onClick={() => signOut()} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default DefaultLayout;