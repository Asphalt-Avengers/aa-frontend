import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { serverURL } from '@/hooks/apiConfig';

const API_URL = `${serverURL}/potholes`;

const getPotholes = async () => {
  return await axios.get(API_URL, {
    withCredentials: true,
  });
};

export const useGetPotholes = () => {
  return useQuery({
    queryKey: ['potholes'],
    queryFn: getPotholes,
  });
};
