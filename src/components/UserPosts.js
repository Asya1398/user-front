import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserPostsRequest } from '../redux/post';

const UserPosts = () => {
  const dispatch = useDispatch();

  const { userPosts, getPostErrorMessages } = useSelector(
    (store) => store.post
  );

  useEffect(() => {
    dispatch(getUserPostsRequest());
  }, []);

  return (
    <div>
      {userPosts ? (
        userPosts.map((post) => {
          return <div>{post.id}</div>;
        })
      ) : (
        <div>{getPostErrorMessages.message}</div>
      )}
    </div>
  );
};

export default UserPosts;
