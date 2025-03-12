import React from 'react';

import { PageContent, Typography } from '@/components/custom';
import StatusBadge from '@/components/src/StatusBadge/StatusBadge';
import { Button } from '@/components/ui/button';
import { useGetReport } from '@/hooks/report/useGetReport';
import { formattedDate } from '@/utils/formatDate';
import { showInMap } from '@/utils/showInMap';

import { ReportImages } from './ReportImages';

interface ReportDetailsProps {
  id: string;
}

export const ReportDetails: React.FC<ReportDetailsProps> = ({ id }) => {
  const { data: report, isSuccess } = useGetReport({ reportId: id });

  if (isSuccess) {
    return (
      <PageContent className="gap-4">
        <PageContent className="gap-2">
          <Typography variant="h2">Report Data</Typography>
          <StatusBadge status={report.status ?? 'OPEN'} />
          <Typography variant="p2">
            Detections: {report.detections.length}
          </Typography>
          <Typography variant="p2">
            Reported at: {formattedDate(report.createdAt)}
          </Typography>
          <Typography variant="p2">
            Last updated: {formattedDate(report.updatedAt)}
          </Typography>
          <Button
            variant="link"
            className="p-0 w-fit"
            onClick={() => showInMap(report.geom)}
          >
            <Typography variant="p2">View on Google Maps</Typography>
          </Button>
        </PageContent>

        <PageContent className="items-center">
          <ReportImages detections={report.detections} />
        </PageContent>

        <PageContent className="gap-2">
          <Typography variant="h2">Comments</Typography>
          <Typography variant="p2">{report.comments}</Typography>
        </PageContent>
      </PageContent>
    );
  }

  return;
};
