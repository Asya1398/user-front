import { useDispatch } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { createStyles, makeStyles } from '@mui/styles';
import { logoutRequest } from '../redux/auth';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  })
);

const MenuNav = ({ history }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const logout = () => {
    dispatch(logoutRequest());
  };

  return (
    <AppBar position="static">
      <Toolbar className={classes.root}>
        {!localStorage.getItem('accessToken') ? (
          <>
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
          </>
        ) : (
          <>
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
            <Button onClick={logout} color="inherit">
              Log Out
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default MenuNav;
