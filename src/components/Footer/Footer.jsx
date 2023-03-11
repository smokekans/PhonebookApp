import { Box, Container, Link, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        m: '0',
        mt: 'auto',
        textAlign: 'center',
        backgroundColor: theme => theme.palette.primary.light,
      }}
    >
      <Container>
        <Typography variant="body2" color="#fff">
          {'Copyright © Created by '}
          <Link
            color="#fff"
            href="https://github.com/smokekans"
            target="_blank"
            rel="noreferrer noopener"
          >
            Dmytro Savchenko
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </Box>
  );
};
