import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Button, Box, Typography } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Box sx={{ alignItems: 'center' }}>
          <Header />
        </Box>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>

        <Footer />
      </Box>
    </>
  );
};

// <Box
//           sx={{
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             textAlign: 'center',
//             m: 'auto',
//           }}
//         >
//           <Typography component="h2" sx={{ fontSize: '56px' }}>
//             Welcome, to Phonebook App!
//           </Typography>
//         </Box>
//         <Box
//           sx={{
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//             textAlign: 'center',
//             gap: '16px',
//           }}
//         >
//           <Button
//             component={RouterLink}
//             to="/login"
//             variant="outlined"
//             color="inherit"
//             sx={{
//               '&.active': {
//                 bgcolor: 'background.paper',
//                 color: 'primary.main',
//               },
//             }}
//           >
//             Sign in
//           </Button>
//           <Button
//             component={RouterLink}
//             to="/registration"
//             variant="outlined"
//             color="inherit"
//             sx={{
//               '&.active': {
//                 bgcolor: 'background.paper',
//                 color: 'primary.main',
//               },
//             }}
//           >
//             Sign up
//           </Button>
//         </Box>
