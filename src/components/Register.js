import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { registerRequest } from '../redux/auth';
import { useHistory } from '../BrowserRouter';
import { useDispatch, useSelector } from 'react-redux';
import usePrevious from '../hooks/usePrevious';
import { useEffect } from 'react';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[a-zA-Z]+$/, 'Must be only letters')
    .min(2, 'firstName too Short!')
    .max(50, 'firstName too Long!')
    .required('firstName required'),
  lastName: Yup.string()
    .matches(/^[a-zA-Z]+$/, 'Must be only letters')
    .min(2, 'lastName too Short!')
    .max(50, 'lastName too Long!')
    .required('lastName required'),
  email: Yup.string().email('Invalid email').required('email required'),
  password: Yup.string()
    .min(2, 'password too Short!')
    .max(50, 'password too Long!')
    .required('password required'),
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

const Register = () => {
  const classes = useStyle();
  const history = useHistory();
  const dispatch = useDispatch();
  const { isRegisterSuccess, registerErrorMessages } = useSelector(
    (store) => store.auth
  );
  const prevIsRegisterSuccess = usePrevious(isRegisterSuccess);
  useEffect(() => {
    if (isRegisterSuccess && prevIsRegisterSuccess === false) {
      history.push('/posts');
    }
  }, [isRegisterSuccess]);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      dispatch(registerRequest(values));
    },
  });
  return (
    <div>
      <Container>
        <Typography
          variant="h6"
          component="h2"
          color="textSecondary"
          gutterBottom
          sx={{ mt: 3 }}
        >
          Create a new Account
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
            name="firstName"
            value={formik.values.firstName}
            label="Name"
            variant="outlined"
            color="secondary"
            fullWidth
            sx={{ m: 2 }}
          />
          {formik.errors.firstName && formik.touched.firstName ? (
            <div className={classes.errorMsg}>{formik.errors.firstName}</div>
          ) : null}
          <TextField
            onChange={formik.handleChange}
            className={classes.field}
            name="lastName"
            value={formik.values.lastName}
            label="Last Name"
            variant="outlined"
            color="secondary"
            fullWidth
            sx={{ m: 2 }}
          />
          {formik.errors.lastName && formik.touched.lastName ? (
            <div className={classes.errorMsg}>{formik.errors.lastName}</div>
          ) : null}
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
          <div className={classes.errorMsg}>
            {registerErrorMessages.message}{' '}
          </div>
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
            Register
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Register;
