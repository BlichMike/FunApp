import { Box } from '@mui/material';
import { Drawer } from './Drawer';
import { Header } from './Header';
import { MainContent } from './MainContent';

export const Main: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
      }}
    >
      <Box height={'50px'}>
        <Header />
      </Box>
      <Drawer />
      <Box height={'90vh'} px={2} width="100%">
        <MainContent />
      </Box>
    </Box>
  );
};
