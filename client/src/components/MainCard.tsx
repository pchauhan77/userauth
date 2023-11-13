import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// material-ui
import { Card, CardContent, CardHeader, Divider } from '@mui/material';

// header style
const headerSX = {
  p: 2.5,
  '& .MuiCardHeader-action': { m: '0px auto', alignSelf: 'center' }
};

// ==============================|| CUSTOM - MAIN CARD ||============================== //

const MainCard = forwardRef(({ children, content = true, contentSX = {}, divider = true, secondary, sx = {}, title, ...others }:any, ref) => {

  return (
    <Card
      elevation={0}
      ref={ref}
      {...others}
      sx={{
        position: 'relative',
        border: '1px solid',
        borderRadius: 1.5,
        ...sx
      }}
    >
      {/* card header and action */}
      {title && <CardHeader sx={headerSX} titleTypographyProps={{ variant: 'subtitle1' }} title={title} action={secondary} />}

      {/* content & header divider */}
      {title && divider && <Divider />}

      {/* card content */}
      {content && <CardContent sx={contentSX}>{children}</CardContent>}
      {!content && children}
    </Card>
  );
});

MainCard.propTypes = {
  contentSX: PropTypes.object,
  divider: PropTypes.bool,
  secondary: PropTypes.object,
  content: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  sx: PropTypes.object,
  children: PropTypes.node
};

export default MainCard;
