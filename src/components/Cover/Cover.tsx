import { MapPin } from 'lucide-react';

import { Typography } from '@/components/Typography';

import styles from './Cover.module.scss';

export const Cover: React.FC = () => {
  return (
    <div className={styles.CoverContainer}>
      <div className={styles.header}>
        <MapPin size={32} strokeWidth={1.75} className={styles.headerIcon} />
        <Typography variant="extra-extra-large-500">CitySpot</Typography>
      </div>
    </div>
  );
};