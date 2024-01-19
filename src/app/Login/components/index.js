import useStyles from './style';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import OutlinedInput from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

const Content = (props) => {
  const {
    values,
    formik,
    handleChange,
    handleClickShowPassword,
    handleMouseDownPassword,
    router
  } = props;

  const styles = useStyles();

  return (
    <>
      <main className="min-h-screen">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p className="left-0 top-0 flex w-full items-center pb-5 pt-4 px-4">
            <ArrowBackIos fontSize="small" />
            <span className="font-mono font-bold ml-1">Back</span>
          </p>
        </div>
        <div className="mb-10 px-8 mt-10">
          <h2 className="mb-3 text-2xl font-semibold mb-10">
            Login
          </h2>
          <form onSubmit={formik.handleSubmit}>
            <div className={classNames(styles.form, 'mb-4 mt-10')}>
              <TextField 
                id="outlined-adornment-password"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange} 
                className="w-full rounded" 
                placeholder="Enter Username/Email"
                error={!!(formik.touched.email && formik.errors.email)}
                helperText={(formik.touched.email && formik.errors.email) || ''}
              />
            </div>
            <div className={classNames(styles.form, 'mb-4')}>
              <TextField 
                id="outlined-adornment-password"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange} 
                className="w-full rounded" 
                placeholder="Enter Username"
                error={!!(formik.touched.username && formik.errors.username)}
                helperText={(formik.touched.username && formik.errors.username) || ''}
              />
            </div>
            <div className={classNames(styles.formWithIcon, 'mb-8')}>
              <TextField
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                name="password"
                value={formik.values.password}
                error={!!(formik.touched.password && formik.errors.password)}
                helperText={(formik.touched.password && formik.errors.password) || ''}
                className={classNames('w-full rounded')}
                onChange={formik.handleChange}
                placeholder="Enter Password"
              />
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  className='buttonToggle'
                >
                  {values.showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                </IconButton>
            </div>
            <Button
              fullWidth
              className={styles.button}
              variant="contained" color="primary"
              id="btnInputAddressForm"
              disabled={formik.values.email && formik.values.username && formik.values.password ? false : true}
              type="submit"
            >
                <Typography variant="subtitle1" type="bold">
                    Login
                </Typography>
            </Button>
          </form>
          <div className="mt-10 text-center">
            <Box className="text-white" fontSize={13}>No Account? <span className={styles.golden} onClick={() => router.push('/register')}>Register Here</span></Box>
          </div>
        </div>
      </main>
    </>
  );
}

export default Content;