import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

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
