import { RotatingLines } from 'react-loader-spinner';
import { Box } from '@mui/material';

export default function Loader() {
  return (
    <Box sx={{ m: 'auto' }}>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="10.75"
        width="300"
        visible={true}
      />
    </Box>
  );
}
