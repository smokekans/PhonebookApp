import { useSelector } from 'react-redux';
import { isLoggerIn, isRefreshed } from 'redux/auth/authSelectors';
import { Outlet, Navigate } from 'react-router-dom';

export const PublicRouters = ({ restricted = false, redirectTo = '/' }) => {
  const userIsRefreshed = useSelector(isRefreshed);
  const userIsLoggerIn = useSelector(isLoggerIn);

  const shouldRedirect = (userIsLoggerIn || userIsRefreshed) && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Outlet />;
};
