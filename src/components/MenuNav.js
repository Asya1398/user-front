import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { createStyles, makeStyles } from '@mui/styles';
// import { useLocation } from 'react-router-dom';
// const location = useLocation()
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  })
);

const MenuNav = () => {
  const classes = useStyles();
  const location = window.location.pathname;
  if (location === `/user/${4}` || location === `/create`) {
    return (
      <AppBar position="static">
        <Toolbar className={classes.root}>
          <div>
            <Button href={`/user/${4}`} color="inherit">
              My Page
            </Button>
            <Button href="/create" color="inherit">
              Create
            </Button>
          </div>
          <Button href="/" color="inherit">
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
  return (
    <AppBar position="static">
      <Toolbar className={classes.root}>
        <Button href="/" color="inherit">
          Home
        </Button>
        <div>
          <Button href="/login" color="inherit">
            Login
          </Button>
          <Button href="/register" color="inherit">
            register
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default MenuNav;
