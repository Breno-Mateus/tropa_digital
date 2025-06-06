import type { ReactElement } from 'react';
import { isAuthenticated } from '../../utils/auth';
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: { children: ReactElement }) => {
  return isAuthenticated() ? children : <Navigate to="/" />;
};