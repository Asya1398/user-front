// import { useHistory } from '../BrowserRouter';
import { useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';

// const useStyle = makeStyles({});
const UserPage = () => {
  // const classes = useStyle();
  // const history = useHistory();
  // const dispatch = useDispatch();

  const { getPost, getPostErrorMessages } = useSelector((store) => store.post);
  console.log('posts' + getPost.length);
  return (
    <div>
      {getPost ? (
        getPost.map((post) => {
          return <div>{post}</div>;
        })
      ) : (
        <div>{getPostErrorMessages.message}</div>
      )}
    </div>
  );
};

export default UserPage;
