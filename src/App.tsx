import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Auth } from '@/layouts/Auth';
import { Dashboard } from '@/layouts/Dashboard';
import { Home } from '@/pages/Home';
import { Login } from '@/pages/Login';
import { ROUTES } from '@/pages/routes';
import { Signup } from '@/pages/Signup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Public routes with Auth layout */}
          <Route path={ROUTES.ROOT} element={<Auth />}>
            <Route index element={<Navigate to={ROUTES.LOGIN} replace />} />
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.SIGNUP} element={<Signup />} />
          </Route>

          <Route path={ROUTES.ROOT} element={<Dashboard />}>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.SIGNUP} element={<Signup />} />
          </Route>

          {/* 404 Catch-All */}
          <Route path={ROUTES.NOT_FOUND} element={<div>404 Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
