import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deletePostRequest, getUserPostsRequest } from '../redux/post';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createStyles, makeStyles } from '@mui/styles';
import { useHistory } from '../BrowserRouter';

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

const UserPosts = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  const { userPosts, getPostErrorMessages } = useSelector(
    (store) => store.post
  );

  useEffect(() => {
    dispatch(getUserPostsRequest());
  }, []);

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        {userPosts &&
          userPosts.map((post) => {
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
                  <CardActions>
                    <Button
                      onClick={() => {
                        dispatch(deletePostRequest(post.id));
                      }}
                      size="small"
                    >
                      Delete
                    </Button>
                    <Button
                      onClick={() => {
                        history.push(`/update/${post.id}`);
                      }}
                      size="small"
                    >
                      Update
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
};

export default UserPosts;
