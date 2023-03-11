import { useDispatch, useSelector } from 'react-redux';
import { getUserEmail } from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/authThunks';
import { Avatar, Box, Button, Typography } from '@mui/material';

export const UserMenu = () => {
  const email = useSelector(getUserEmail);
  const dispatch = useDispatch();

  const logOutUser = () => dispatch(logOut());

  function stringToColor(string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name[0]}`,
    };
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Avatar {...stringAvatar(email)} sx={{ mr: 2 }} />
        <Typography component="p" sx={{ mr: 2 }}>
          {email}
        </Typography>
        <Button
          variant="outlined"
          color="inherit"
          size="small"
          onClick={logOutUser}
        >
          Log out
        </Button>
      </Box>
    </>
  );
};
