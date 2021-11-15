import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { createStyles, makeStyles } from '@mui/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  })
);

const MenuNav = ({ history }) => {
  const classes = useStyles();
  if (!localStorage.getItem('accessToken')) {
    return (
      <AppBar position="static">
        <Toolbar className={classes.root}>
          <Button
            color="inherit"
            onClick={() => {
              history.push('/');
            }}
          >
            Home
          </Button>
          <div>
            <Button
              color="inherit"
              onClick={() => {
                history.push('/login');
              }}
            >
              Login
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                history.push('/register');
              }}
            >
              register
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    );
  } else {
    return (
      <AppBar position="static">
        <Toolbar className={classes.root}>
          <div>
            <Button
              onClick={() => {
                history.push('/posts');
              }}
              color="inherit"
            >
              My Page
            </Button>
            <Button
              onClick={() => {
                history.push('/posts/manage');
              }}
              color="inherit"
            >
              Create
            </Button>
          </div>
          <Button
            onClick={() => {
              history.push('/logout');
            }}
            color="inherit"
          >
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
    );
  }
};
export default MenuNav;
