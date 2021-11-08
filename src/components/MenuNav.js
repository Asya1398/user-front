import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { createStyles, makeStyles } from '@mui/styles';


const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: 'space-between'

        },
    }),
);

function MenuNav() {
    const classes = useStyles()

    return (
        <AppBar position="static" >

            <Toolbar className={classes.root}>
                <Button href="/"  color="inherit">
                    Home
                </Button>
                <div >
                    <Button href="/login"  color="inherit">
                        Login
                    </Button>
                    <Button href="/register"  color="inherit">
                        register
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    );
}
export default MenuNav;