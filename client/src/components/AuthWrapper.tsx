import PropTypes from 'prop-types';

// material-ui
import { Box, Grid } from '@mui/material';

// project-imports
import AuthCard from './AuthCard';

// assets
// import AuthBackground from 'assets/images/auth/AuthBackground';

// ==============================|| AUTHENTICATION - WRAPPER ||============================== //
type AuthWrapperProps = {
  children: React.ReactNode;
}

const AuthWrapper = ({ children }: AuthWrapperProps) => (
  <Box sx={{ minHeight: '100vh', backgroundColor:'#f7f7f6' }}>
    {/* <AuthBackground /> */}
    <Grid
      container
      direction="column"
      justifyContent="center"
      sx={{
        minHeight: '100vh'
      }}
    >
      <Grid item xs={12}>
        <Grid
          item
          xs={12}
          container
          justifyContent="center"
          alignItems="center"
          sx={{ minHeight: { xs: 'calc(100vh - 210px)', sm: 'calc(100vh - 134px)', md: 'calc(100vh - 112px)' } }}
        >
          <Grid item>
            <AuthCard>{children}</AuthCard>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Box>
);

AuthWrapper.propTypes = {
  children: PropTypes.node
};

export default AuthWrapper;
