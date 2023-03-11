import { useSelector } from 'react-redux';
import { isLoggedIn, isRefreshed } from '../redux/auth/authSelectors';
import { Outlet, Navigate } from 'react-router-dom';

export const PrivateRouters = () => {
  const userIsLoggedIn = useSelector(isLoggedIn);
  const userIsRefreshed = useSelector(isRefreshed);
  return userIsLoggedIn || userIsRefreshed ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};
