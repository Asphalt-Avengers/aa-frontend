import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { serverURL } from '@/hooks/apiConfig';

const API_URL = `${serverURL}/reports`;

interface GetReportParams {
  reportId: string;
}

const getReport = async (params: GetReportParams) => {
  return await axios.get(`${API_URL}/${params.reportId}`, {
    withCredentials: true,
  });
};

export const useGetReport = (params: GetReportParams) => {
  return useQuery({
    queryKey: ['report', params],
    queryFn: () => getReport(params),
  });
};
