import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { serverURL } from '@/hooks/apiConfig';
import { ReportStatus } from '@/types';

const API_URL = `${serverURL}/reports`;

interface UpdateReportParams {
  reportId: string;
}

interface UpdateReportBody {
  location?: string;
  description?: string;
  comments?: string;
  status?: ReportStatus;
  details?: string;
}

const updateReport = async (
  params: UpdateReportParams,
  body: UpdateReportBody
) => {
  return await axios.put(
    `${API_URL}/${params.reportId}`,
    { body },
    {
      withCredentials: true,
    }
  );
};

export const useUpdateReport = () => {
  return useMutation({
    mutationFn: ({
      params,
      body,
    }: {
      params: UpdateReportParams;
      body: UpdateReportBody;
    }) => updateReport(params, body),
  });
};
