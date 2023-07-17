import { AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import { useDrawer } from '../hooks/drawer.service.hook';
import { useNavigate } from 'react-router-dom';

export const Header: React.FC = () => {
  const { toggleDrawer } = useDrawer();
  const navigate = useNavigate();
  // <Button
  //   onClick={() => {
  //     navigate('/');
  //   }}
  //   variant="outlined"
  //   startIcon={<ArrowBackIcon fontSize="small" />}
  //   sx={{
  //     position: 'absolute',
  //     top: '16px',
  //     right: '16px',
  //     zIndex: 'modal',
  //   }}
  // >
  //   back to main menu
  // </Button>;
  return (
    <AppBar position="fixed">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => {
            navigate('/');
          }}
          sx={{ mr: 2 }}
        >
          <AdbIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
