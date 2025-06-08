import type { ReactElement } from 'react';
import { Navigate } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth';

export const ProtectedRoute = ({ children }: { children: ReactElement }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/" replace />;
};