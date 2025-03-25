import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { serverURL } from '@/hooks/apiConfig';

const API_URL = `${serverURL}/detections`;

interface DeleteDetectionParams {
  detectionId: string;
}

const deleteDetection = async (params: DeleteDetectionParams) => {
  return await axios.delete(`${API_URL}/${params.detectionId}`, {
    withCredentials: true,
  });
};

export const useDeleteDetection = () => {
  return useMutation({
    mutationFn: (params: DeleteDetectionParams) => deleteDetection(params),
  });
};
