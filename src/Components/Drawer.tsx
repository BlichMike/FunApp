import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Drawer as MuiDrawer,
} from '@mui/material';
import { useDrawer } from '../hooks/drawer.service.hook';
import { useNavigate } from 'react-router-dom';

export const Drawer: React.FC = () => {
  const navigate = useNavigate();
  const { toggleDrawer, isOpen } = useDrawer();
  return (
    <MuiDrawer open={isOpen} onClose={toggleDrawer}>
      <Box sx={{ width: 250 }} role="presentation" onKeyDown={toggleDrawer}>
        <List>
          <ListSubheader sx={{ backgroundColor: 'inherit' }}>
            Games
          </ListSubheader>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                navigate('/tictactoe');
              }}
            >
              <ListItemText primary={'Tic Tac Toe'} />
              <ListItemIcon></ListItemIcon>
            </ListItemButton>
          </ListItem>
          <Divider></Divider>
        </List>
      </Box>
    </MuiDrawer>
  );
};
