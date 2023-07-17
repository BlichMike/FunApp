import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import { useGame } from '../hooks/game.service.hook';

export const BoardResizer: React.FC = () => {
  const { boardSize, setBoardSize } = useGame();

  const handleBoardSizeChange = (event: SelectChangeEvent) => {
    setBoardSize(Number(event.target.value));
  };

  return (
    <FormControl sx={{ width: '100px', alignSelf: 'start' }} variant="filled">
      <InputLabel id="board-size-label">Board Size</InputLabel>
      <Select
        labelId="board-size-select-label"
        id="board-size-select"
        value={boardSize.toString()}
        label="Board Size"
        onChange={handleBoardSizeChange}
        size="medium"
      >
        <MenuItem value={3}>3x3</MenuItem>
        <MenuItem value={4}>4x4</MenuItem>
        <MenuItem value={5}>5x5</MenuItem>
      </Select>
    </FormControl>
  );
};
