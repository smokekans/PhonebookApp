import { useSelector } from 'react-redux';
import { isLoggedIn, isRefreshed } from 'redux/auth/authSelectors';
import { Outlet, Navigate } from 'react-router-dom';

export const PublicRouters = ({ restricted = false, redirectTo = '/' }) => {
  const userIsRefreshed = useSelector(isRefreshed);
  const userIsLoggedIn = useSelector(isLoggedIn);

  const shouldRedirect = (userIsLoggedIn || userIsRefreshed) && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Outlet />;
};
