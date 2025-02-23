import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { serverURL } from '@/hooks/apiConfig';

const API_URL = `${serverURL}/images`;

interface GetPotholeImageParams {
  potholeId: string;
}

const getPotholeImage = async (params: GetPotholeImageParams) => {
  return await axios.get(`${API_URL}/${params.potholeId}`, {
    withCredentials: true,
  });
};

export const useGetPotholeImage = (params: GetPotholeImageParams) => {
  return useQuery({
    queryKey: ['potholeImage', params],
    queryFn: () => getPotholeImage(params),
  });
};
