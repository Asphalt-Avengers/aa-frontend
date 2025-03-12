import React from 'react';
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';

import { useCurrentUser } from '@/hooks/user/useCurrentUser';
import { Auth } from '@/layouts/Auth';
import { Dashboard } from '@/layouts/Dashboard';
import { Map, Overview, Report, Reports } from '@/pages';
import { Login } from '@/pages/Login';
import { ROUTES } from '@/pages/routes';

const PublicRoute: React.FC = () => {
  const { data: user, isLoading } = useCurrentUser();

  if (isLoading) {
    return;
  }

  return !user ? <Outlet /> : <Navigate to="/home" />;
};

const ProtectedRoute: React.FC = () => {
  return <Outlet />;
  const { data: user, isLoading } = useCurrentUser();

  if (isLoading) {
    return;
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Public routes with Auth layout */}
          <Route element={<PublicRoute />}>
            <Route path={ROUTES.ROOT} element={<Auth />}>
              <Route index element={<Navigate to={ROUTES.LOGIN} replace />} />
              <Route path={ROUTES.LOGIN} element={<Login />} />
            </Route>
          </Route>

          {/* Protected routes with Dashboard layout */}
          <Route element={<ProtectedRoute />}>
            <Route path={ROUTES.HOME} element={<Dashboard />}>
              <Route
                index
                element={<Navigate to={ROUTES.OVERVIEW} replace />}
              />
              <Route path={ROUTES.MAP} element={<Map />} />
              <Route path={ROUTES.OVERVIEW} element={<Overview />} />
              <Route path={ROUTES.REPORT} element={<Report />} />
              <Route path={ROUTES.REPORTS} element={<Reports />} />
            </Route>
          </Route>

          {/* 404 Catch-All */}
          <Route path={ROUTES.NOT_FOUND} element={<div>404 Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
