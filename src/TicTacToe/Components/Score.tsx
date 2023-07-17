import { Avatar, Chip, Paper, Stack } from '@mui/material';
import { Player } from '../../classes/Player';

export const Score: React.FC<{ players: Array<Player> }> = ({ players }) => {
  return (
    <Stack direction="row" spacing={5}>
      {players.map((player) => (
        <Paper sx={{ p: 1 }} elevation={3} key={player.id}>
          <Stack direction="row" spacing={1} alignItems={'center'}>
            <Avatar title={player.name}>{player.name[0]}</Avatar>
            <Chip label={`${player.wins} wins`} />
          </Stack>
        </Paper>
      ))}
    </Stack>
  );
};
