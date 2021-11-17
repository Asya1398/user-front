import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../redux/auth';
import usePrevious from '../hooks/usePrevious';
import { useEffect } from 'react';
import { useHistory } from '../BrowserRouter';

const SigninSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
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
  errorMsg: {
    marginTop: 20,
    color: 'red',
  },
});
const LogIn = () => {
  const classes = useStyle();
  const history = useHistory();
  const dispatch = useDispatch();

  const { isLoginSuccess, loginErrorMessages } = useSelector(
    (store) => store.auth
  );

  const prevIsLoginSuccess = usePrevious(isLoginSuccess);

  useEffect(() => {
    if (isLoginSuccess && prevIsLoginSuccess === false) {
      history.push('/posts');
    }
  }, [isLoginSuccess]);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: SigninSchema,
    onSubmit: (values) => {
      dispatch(loginRequest(values));
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
        LogIn your account
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
          name="email"
          value={formik.values.email}
          label="Email"
          variant="outlined"
          color="secondary"
          fullWidth
          sx={{ m: 2 }}
        />
        {formik.errors.email && formik.touched.email ? (
          <div className={classes.errorMsg}>{formik.errors.email}</div>
        ) : null}
        <div className={classes.errorMsg}>{loginErrorMessages.message} </div>
        <TextField
          onChange={formik.handleChange}
          className={classes.field}
          name="password"
          value={formik.values.password}
          label="Password"
          variant="outlined"
          color="secondary"
          fullWidth
          sx={{ m: 2 }}
          type="password"
        />
        {formik.errors.password && formik.touched.password ? (
          <div className={classes.errorMsg}>{formik.errors.password}</div>
        ) : null}
        <Button type="Submit" color="secondary" variant="contained">
          LogIn
        </Button>
      </form>
    </Container>
  );
};

export default LogIn;
