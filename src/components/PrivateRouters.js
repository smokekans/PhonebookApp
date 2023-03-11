import { useSelector } from 'react-redux';
import { isLoggerIn, isRefreshed } from '../redux/auth/authSelectors';
import { Outlet, Navigate } from 'react-router-dom';

export const PrivateRouters = () => {
  const userIsLoggerIn = useSelector(isLoggerIn);
  const userIsRefreshed = useSelector(isRefreshed);
  return userIsLoggerIn || userIsRefreshed ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};
