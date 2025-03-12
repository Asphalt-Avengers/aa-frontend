import React from 'react';

import { PageContent } from '@/components/custom';
import { useGetReport } from '@/hooks/report/useGetReport';

interface ReportDetailsProps {
  id: string;
}

export const ReportDetails: React.FC<ReportDetailsProps> = ({ id }) => {
  const { data: report, isSuccess } = useGetReport({ reportId: id });

  if (isSuccess) {
    return (
      <PageContent>Hello! This is the report with ID {report.id}</PageContent>
    );
  }

  return;
};
