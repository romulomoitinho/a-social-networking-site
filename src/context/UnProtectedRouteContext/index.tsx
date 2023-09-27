import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../AutenticationContext';

interface UnProtectedRouteProps {
  component: React.FC;
  path: string;
}

const UnProtectedRoute: React.FC<UnProtectedRouteProps> = ({
  component: Component,
  path,
}) => {
  const { isAuthenticated } = useContext(AuthContext);
  console.log({taautendicado: isAuthenticated})

  return (
        isAuthenticated && path != '/login' || isAuthenticated && path != '/register' ? (
            <Navigate to="/home" replace/>
          ) : (
            <Component />
          )
  );
};

export default UnProtectedRoute;
