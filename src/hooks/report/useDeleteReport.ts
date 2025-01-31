import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { serverURL } from '@/hooks/apiConfig';

const API_URL = `${serverURL}/reports`;

interface DeleteReportParams {
  reportId: string;
}

const deleteReport = async (params: DeleteReportParams) => {
  return await axios.delete(`${API_URL}/${params.reportId}`, {
    withCredentials: true,
  });
};

export const useDeleteReport = () => {
  return useMutation({
    mutationFn: (params: DeleteReportParams) => deleteReport(params),
  });
};
