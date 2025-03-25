import React from 'react';
import { useParams } from 'react-router-dom';

import GoogleMapsIcon from '@/assets/google-map-icon.png';
import {
  Page,
  PageContent,
  PageDate,
  PageHeader,
  Typography,
} from '@/components/custom';
import StatusBadge from '@/components/src/StatusBadge/StatusBadge';
import { Button } from '@/components/ui/button';
import { useGetReport } from '@/hooks/report/useGetReport';
import { showInMap } from '@/utils/showInMap';

import { ReportImages } from './ReportImages';

export const Report: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: report, isSuccess } = useGetReport({ reportId: id || '' });

  if (isSuccess) {
    return (
      <Page>
        <PageDate />
        <PageHeader className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            Report {id}
            <StatusBadge status={report.status ?? 'OPEN'} />
          </div>
          <Button className="gap-2" onClick={() => showInMap(report.geom)}>
            <Typography variant="p3">View on Google Maps</Typography>
            <img src={GoogleMapsIcon} alt="Google Maps" />
          </Button>
        </PageHeader>

        <PageContent className="gap-4">
          <PageContent className="items-center">
            <ReportImages detections={report.detections} />
          </PageContent>

          <PageContent className="gap-2">
            <Typography variant="h2">Comments</Typography>
            <Typography variant="p2">{report.comments}</Typography>
          </PageContent>
        </PageContent>
      </Page>
    );
  }

  return;
};
