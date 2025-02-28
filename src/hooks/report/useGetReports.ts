import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { serverURL } from '@/hooks/apiConfig';

const API_URL = `${serverURL}/reports`;

const getReports = async () => {
  return await axios.get(API_URL, {
    withCredentials: true,
  });
};

export const useGetReports = () => {
  return useQuery({
    queryKey: ['reports'],
    queryFn: getReports,
  });
};
