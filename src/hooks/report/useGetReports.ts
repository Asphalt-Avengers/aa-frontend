import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { z } from 'zod';

import { serverURL } from '@/hooks/apiConfig';

import { reportSchema } from './reportSchema';

const API_URL = `${serverURL}/reports`;

const reportsSchema = z.array(reportSchema);

const getReports = async () => {
  const response = await axios.get<{ reports: unknown }>(API_URL, {
    withCredentials: true,
  });
  return reportsSchema.parse(response.data.reports);
};

export const useGetReports = () => {
  return useQuery({
    queryKey: ['reports'],
    queryFn: getReports,
  });
};
