import React from 'react';
import { Outlet } from 'react-router-dom';

import { Navrail } from '@/components/src/Navrail/Navrail';
import { SidebarProvider } from '@/components/ui/sidebar';

export const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-row">
      <SidebarProvider>
        <Navrail />
      </SidebarProvider>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};
