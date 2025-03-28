import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { serverURL } from '@/hooks/apiConfig';

import { reportSchema } from './reportSchema';

const API_URL = `${serverURL}/reports`;

interface GetReportParams {
  reportId: string;
}

const getReport = async (params: GetReportParams) => {
  const response = await axios.get<{ report: unknown }>(
    `${API_URL}/${params.reportId}`,
    {
      withCredentials: true,
    }
  );
  return reportSchema.parse(response.data.report);
};

export const useGetReport = (params: GetReportParams) => {
  return useQuery({
    queryKey: ['report', params],
    queryFn: () => getReport(params),
  });
};
