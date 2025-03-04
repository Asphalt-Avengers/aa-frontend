import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { z } from 'zod';

import { serverURL } from '@/hooks/apiConfig';

const API_URL = `${serverURL}/reports/summary`;

const reportSummarySchema = z
  .object({
    date: z.string(),
    open: z.number(),
    resolved: z.number(),
  })
  .passthrough();

export type ReportSummary = z.infer<typeof reportSummarySchema>;

const reportsSchema = z.array(reportSummarySchema);

const getReportsSummary = async () => {
  const response = await axios.get<{ reportsSummary: unknown }>(API_URL, {
    withCredentials: true,
  });
  return reportsSchema.parse(response.data.reportsSummary);
};

export const useGetReportsSummary = () => {
  return useQuery({
    queryKey: ['reportsSummary'],
    queryFn: getReportsSummary,
  });
};
