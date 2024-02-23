import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <Box sx={{ flexGrow: 40 }}>
      <AppBar position="static">
        <Toolbar variant="dense"><Box >
        </Box>
          <Box sx={{ display: 'flex', gap: '50px' }}>
            <Typography variant="h6" color="white" component="div">
              Covied
            </Typography>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Typography variant="h6" color="white">
                Home
              </Typography>
            </Link>
            <Link to="/Filteringcompnent" style={{ textDecoration: 'none' }}>
              <Typography variant="h6" color="white"  >
                Filter
              </Typography>
            </Link>

            <Link to="/comparasion" style={{ textDecoration: 'none' }}>
              <Typography variant="h6" color="white"  >
                comparasion
              </Typography>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>

  );
}

export default Header
