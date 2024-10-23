import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh', // Fills the entire viewport height
        width: '100vw', // Fills the entire viewport width
        textAlign: 'center',
        padding: 3,
        position: 'relative', // Responsive to window resizing
      }}
    >
      {/* 404 Heading */}
      <Typography
        variant="h1"
        component="div"
        gutterBottom
        sx={{ color: '#ADD8E6', fontWeight: 'bold' }}
      >
        404
      </Typography>

      {/* Subheading */}
      <Typography variant="h6" component="p" sx={{ marginBottom: 3 }}>
        Oops! The page you're looking for doesn't exist.
      </Typography>

      {/* Back to Home Button */}
      <Button
        variant="contained"
        color="primary"
        startIcon={<HomeIcon />}
        component={Link}
        to="/home"
        sx={{
          textTransform: 'none',
          padding: '10px 20px',
          backgroundColor: '#ADD8E6', // Light blue button color
          '&:hover': {
            backgroundColor: '#87CEEB', // Slightly darker blue on hover
          },
        }}
      >
        Go Back Home
      </Button>
    </Box>
  );
};
