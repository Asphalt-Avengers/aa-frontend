import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { serverURL } from '@/hooks/apiConfig';

const API_URL = `${serverURL}/potholes`;

interface GetPotholeParams {
  potholeId: string;
}

const getPothole = async (params: GetPotholeParams) => {
  return await axios.get(`${API_URL}/${params.potholeId}`, {
    withCredentials: true,
  });
};

export const useGetPothole = (params: GetPotholeParams) => {
  return useQuery({
    queryKey: ['pothole', params],
    queryFn: () => getPothole(params),
  });
};
