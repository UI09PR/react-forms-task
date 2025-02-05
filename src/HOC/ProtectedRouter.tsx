import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

type ProtectedRouterPropsType = {
  children?: React.ReactElement,
  isAllowed: boolean,
  redirect?: string
}

export default function ProtectedRouter({
  children,
  isAllowed,
  redirect = '/',
}: ProtectedRouterPropsType): JSX.Element {
  if (!isAllowed) return <Navigate to={redirect} replace />;
  return children || <Outlet />;
}
