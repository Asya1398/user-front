import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from '../BrowserRouter';
import { useDispatch, useSelector } from 'react-redux';
import usePrevious from '../hooks/usePrevious';
import { useEffect } from 'react';
import { createPostRequest } from '../redux/post';

const SignInSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  description: Yup.string()
    .min(10, 'Too Short!')
    .max(200, 'Too Long!')
    .required('Required'),
});

const useStyle = makeStyles({
  formStyle: {
    width: '25%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
  },
  field: {
    marginTop: 25,
    marginBottom: 25,
    display: 'block',
  },
});

const ManagePost = () => {
  const classes = useStyle();
  const history = useHistory();
  const dispatch = useDispatch();

  const { isCreatePostSuccess, createPostErrorMessages } = useSelector(
    (store) => store.post
  );

  const prevIsRegisterSuccess = usePrevious(isCreatePostSuccess);

  useEffect(() => {
    if (isCreatePostSuccess && prevIsRegisterSuccess === false) {
      history.push('/posts');
    }
  }, [isCreatePostSuccess]);

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    validationSchema: SignInSchema,
    onSubmit: (values) => {
      dispatch(createPostRequest(values));
    },
  });

  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
        sx={{ mt: 3 }}
      >
        Create Product
      </Typography>
      <form
        noValidate
        autoComplete="off"
        onSubmit={formik.handleSubmit}
        className={classes.formStyle}
      >
        <TextField
          onChange={formik.handleChange}
          className={classes.field}
          name="title"
          value={formik.values.title}
          label="Title"
          variant="outlined"
          color="secondary"
          fullWidth
          sx={{ m: 2 }}
        />
        {formik.errors.title && formik.touched.title ? (
          <div>{formik.errors.title}</div>
        ) : null}
        <TextField
          onChange={formik.handleChange}
          className={classes.field}
          name="description"
          value={formik.values.password}
          label="Description"
          variant="outlined"
          color="secondary"
          fullWidth
          sx={{ m: 2 }}
          multiline
          rows={4}
        />
        {formik.errors.description && formik.touched.description ? (
          <div>{formik.errors.description}</div>
        ) : null}
        <Button type="Submit" color="secondary" variant="contained">
          Create
        </Button>
      </form>
    </Container>
  );
};

export default ManagePost;
