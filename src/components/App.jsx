import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchCurrentUser } from 'redux/auth/authThunks';
// import { Navigation } from './Navigation/Navigation';
import { PrivateRouters } from './PrivateRouters';
import { PublicRouters } from './PublicRouters';
import { SharedLayout } from './SharedLayout/SharedLayout';

const LogIn = lazy(() => import('pages/LogIn'));
const Registration = lazy(() => import('pages/Registration'));
const Contacts = lazy(() => import('pages/Contacts'));

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#00994d',
      },
      secondary: {
        main: '#8cd98c',
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route
              path=""
              element={<PublicRouters redirectTo="/contacts" restricted />}
            >
              <Route path="/login" element={<LogIn />} />
              <Route path="/registration" element={<Registration />} />
            </Route>

            <Route path="" element={<PrivateRouters />}>
              <Route path="/contacts" element={<Contacts />} />
            </Route>
            <Route path="*" element={<LogIn />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </>
  );
}
