import {
    Typography,
    List,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const DrawerComponent = (props) => {
    const { menuItems, closeDrawer } = props;

    return (
        <>
            <Button
                color="primary"
                component={Link}
                to="/"
                onClick={closeDrawer}
            >
                <Typography variant="h4">Ecom Shop</Typography>
            </Button>

            <Divider />
            <List>
                {menuItems.map((menuItem, index) => (
                    <ListItemRenderer
                        key={'drawerMenuItem' + index}
                        menuItem={menuItem}
                        closeDrawer={closeDrawer}
                    ></ListItemRenderer>
                ))}
            </List>
        </>
    );
};

const ListItemRenderer = (props) => {
    const { menuItem, closeDrawer } = props;
    const { name, image: SelectedIcon, path } = menuItem;

    return (
        <div onClick={closeDrawer}>
            <ListItem button component={Link} to={path}>
                <ListItemIcon>
                    <SelectedIcon color="primary" />
                </ListItemIcon>
                <ListItemText>
                    <Typography color="primary"> {name} </Typography>
                </ListItemText>
            </ListItem>
        </div>
    );
};

export default DrawerComponent;
