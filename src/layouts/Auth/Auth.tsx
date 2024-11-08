import React from 'react';
import { Outlet } from 'react-router-dom';

import { Cover } from '@/components/Cover';

import styles from './Auth.module.scss';

export const Auth: React.FC = () => {
  return (
    <div className={styles.authLayout}>
      <Cover />
      <div className={styles.authContent}>
        <Outlet />
      </div>
    </div>
  );
};
