import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { z } from 'zod';

import { serverURL } from '@/hooks/apiConfig';

const API_URL = `${serverURL}/reports`;

const reportSchema = z
  .object({
    id: z.number(),
    geom: z.string(),
    geomJson: z.any(),
    description: z.string().nullable(),
    detections: z.array(z.any()), // Assuming Detection is another schema
    comments: z.string().nullable(),
    status: z.enum(['OPEN', 'IN_PROGRESS', 'RESOLVED']).nullable(),
    createdAt: z.string(),
    updatedAt: z.string(),
    details: z.string().nullable(),
  })
  .passthrough();

export type Report = z.infer<typeof reportSchema>;

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
