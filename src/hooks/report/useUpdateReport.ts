import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { serverURL } from '@/hooks/apiConfig';
import { ReportStatus } from '@/types';

const API_URL = `${serverURL}/reports`;

interface DeleteReportParams {
  reportId: string;
}

interface DeleteReportBody {
  location?: string;
  description?: string;
  comments?: string;
  status?: ReportStatus;
  details?: string;
}

const deleteReport = async (
  params: DeleteReportParams,
  body: DeleteReportBody
) => {
  return await axios.put(
    `${API_URL}/${params.reportId}`,
    { body },
    {
      withCredentials: true,
    }
  );
};

export const useDeleteReport = () => {
  return useMutation({
    mutationFn: ({
      params,
      body,
    }: {
      params: DeleteReportParams;
      body: DeleteReportBody;
    }) => deleteReport(params, body),
  });
};
