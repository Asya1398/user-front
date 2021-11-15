import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { createStyles, makeStyles } from '@mui/styles';
// import { useNavigate } from 'react-router-dom';

// const navigate = useNavigate();
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
  // const location = window.location.pathname;
  // return (
  //   <AppBar position="static">
  //     <Toolbar className={classes.root}>
  //       <div>
  //         <Button
  //           onClick={() => {
  //             // navigate('/home');
  //           }}
  //           color="inherit"
  //         >
  //           My Page
  //         </Button>
  //         <Button
  //           onClick={() => {
  //             // navigate('/create');
  //           }}
  //           color="inherit"
  //         >
  //           Create
  //         </Button>
  //       </div>
  //       <Button
  //         onClick={() => {
  //           // navigate('/');
  //         }}
  //         color="inherit"
  //       >
  //         Log Out
  //       </Button>
  //     </Toolbar>
  //   </AppBar>
  // );
  //
  return (
    <AppBar position="static">
      <Toolbar className={classes.root}>
        <Button
          onClick={() => {
            // navigate('/');
          }}
          color="inherit"
        >
          Home
        </Button>
        <div>
          <Button
            onClick={() => {
              // navigate('/login');
            }}
            color="inherit"
          >
            Login
          </Button>
          <Button
            onClick={() => {
              // navigate('/register');
            }}
            color="inherit"
          >
            register
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default MenuNav;
