import React from 'react';
import { useParams } from 'react-router-dom';

import { Page, PageDate, PageHeader } from '@/components/custom';

import { ReportDetails } from './ReportDetails';

export const Report: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>Invalid report ID</div>;
  }

  return (
    <Page>
      <PageDate />
      <PageHeader>Report {id}</PageHeader>
      <ReportDetails id={id} />
    </Page>
  );
};
