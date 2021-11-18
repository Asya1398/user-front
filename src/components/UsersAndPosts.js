import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { createStyles, makeStyles } from '@mui/styles';
import { getAllPostsRequest, getAllUsersRequest } from '../redux/post';

const drawerWidth = 240;
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      marginTop: '50px',
    },
    decs: {
      wordBreak: 'break-all',
    },
  })
);
const UsersAndPosts = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { allPosts, getAllPostsErrorMessages } = useSelector(
    (store) => store.post
  );
  const { allUsers, getAllUsersErrorMessages } = useSelector(
    (store) => store.post
  );

  useEffect(() => {
    dispatch(getAllPostsRequest());
    dispatch(getAllUsersRequest());
  }, []);
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            marginTop: '70px',
          },
        }}
      >
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {allUsers ? (
              allUsers.map((user) => {
                return <ListItemText key={user.id} primary={user.firstName} />;
              })
            ) : (
              <div>{getAllUsersErrorMessages.message}</div>
            )}
          </List>
          <Divider />
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography POSTS>
          <Container className={classes.root}>
            <Grid container spacing={3}>
              {allPosts ? (
                allPosts.map((post) => {
                  return (
                    <Grid item xs={12} md={6} lg={4} key={post.id}>
                      <Card sx={{ maxWidth: 345 }}>
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {post.title}
                          </Typography>
                          <Typography
                            className={classes.decs}
                            variant="body2"
                            color="text.secondary"
                          >
                            {post.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  );
                })
              ) : (
                <div>{getAllPostsErrorMessages.message}</div>
              )}
            </Grid>
          </Container>
        </Typography>
      </Box>
    </Box>
  );
};

export default UsersAndPosts;
