import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[a-zA-Z]+$/, 'Must be only letters')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .matches(/^[a-zA-Z]+$/, 'Must be only letters')
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
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
});

const Register = () => {
  const classes = useStyle();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      // TODO: implement save functional
      console.log(values);
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
            <div>{formik.errors.firstName}</div>
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
            <div>{formik.errors.lastName}</div>
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
            <div>{formik.errors.email}</div>
          ) : null}
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
          />
          {formik.errors.password && formik.touched.password ? (
            <div>{formik.errors.password}</div>
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
