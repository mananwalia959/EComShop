import React, { useState } from 'react';
import {
    AppBar,
    Button,
    Container,
    Drawer,
    Hidden,
    IconButton,
    makeStyles,
    Toolbar,
    Typography,
} from '@material-ui/core';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import DrawerComponent from './SideBar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const getMenuItems = () => {
    const menuItems = [];
    const myCartMenuItem = getNewMenuItem('My Cart', ShoppingCartIcon);
    const loginMenuItem = getNewMenuItem('Login', AccountCircleIcon);
    menuItems.push(myCartMenuItem);
    menuItems.push(loginMenuItem);

    return menuItems;
};

const AppNameComp = () => {
    const classes = useStyles();
    return (
        <Typography variant="h6" className={classes.title}>
            Ecom Shop
        </Typography>
    );
};

const Header = () => {
    const menuItems = getMenuItems();
    let [drawerOpen, setDrawerOpen] = useState(false);
    const classes = useStyles();

    const openDrawer = () => {
        setDrawerOpen(true);
    };

    const closeDrawer = () => {
        setDrawerOpen(false);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Container maxWidth="lg">
                    <Toolbar disableGutters>
                        <AppNameComp />
                        <Hidden mdUp>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                                onClick={openDrawer}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Hidden>

                        <Hidden smDown>
                            {menuItems.map((menuitem, index) => (
                                <MenuItemsRenderer
                                    key={index}
                                    menuitem={menuitem}
                                />
                            ))}
                        </Hidden>
                    </Toolbar>
                </Container>
            </AppBar>

            <Hidden mdUp>
                <Drawer
                    anchor="left"
                    open={drawerOpen}
                    onClose={() => setDrawerOpen(false)}
                >
                    <DrawerComponent
                        closeDrawer={closeDrawer}
                        menuItems={menuItems}
                    />
                </Drawer>
            </Hidden>
        </div>
    );
};

const MenuItemsRenderer = (props) => {
    const { name, image: SelectedIcon } = props.menuitem;
    return (
        <Button color="inherit">
            <SelectedIcon />
            {name}
        </Button>
    );
};

export default Header;
function getNewMenuItem(name, image) {
    return {
        name,
        image,
    };
}
