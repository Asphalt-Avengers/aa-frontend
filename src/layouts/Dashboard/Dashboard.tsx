import React from 'react';
import { Outlet } from 'react-router-dom';

import { Navrail } from '@/components/Navrail';
import { SidebarProvider } from '@/components/ui/sidebar';

import styles from './Dashboard.module.scss';

export const Dashboard: React.FC = () => {
  return (
    <div className={styles.dashboardLayout}>
      <SidebarProvider>
        <Navrail />
      </SidebarProvider>
      <div className={styles.dashboardContent}>
        <Outlet />
      </div>
    </div>
  );
};
