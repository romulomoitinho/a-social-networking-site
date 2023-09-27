import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './../AutenticationContext';

interface ProtectedRouteProps {
  component: React.FC;
  path: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  path,
}) => {
  const { isAuthenticated } = useContext(AuthContext);
  console.log({taautendicado: isAuthenticated})
  console.log(path)

  return (
        isAuthenticated && path == '/login' || isAuthenticated && path == '/register' || isAuthenticated && path == '/' ? (
            <Navigate to="/home" replace/>
          ) : (
            !isAuthenticated ? <Navigate to="/login" replace/> : 
            <Component />
            )
          );
};

export default ProtectedRoute;
