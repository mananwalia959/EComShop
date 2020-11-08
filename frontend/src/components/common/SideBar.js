import {
    makeStyles,
    Typography,
    List,
    Divider,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    drawerComponentHeader: {
        margin: theme.spacing(2),
    },
}));

const DrawerComponent = (props) => {
    const { menuItems, closeDrawer } = props;
    const styles = useStyles();

    return (
        <>
            <Typography
                variant="h5"
                color="primary"
                className={styles.drawerComponentHeader}
            >
                Ecom Shop
            </Typography>

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
    const { name, image: SelectedIcon } = menuItem;

    return (
        <div onClick={closeDrawer}>
            <ListItem button>
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
