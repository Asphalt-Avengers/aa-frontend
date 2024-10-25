import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { serverURL } from '@/hooks/apiConfig';

const API_URL = `${serverURL}/sessions/invalidate`;

const invalidateSession = async () => {
  const response = await axios.post(API_URL, {}, { withCredentials: true });
  console.log(response);
};

export const useLogout = () => {
  return useMutation({
    mutationFn: () => invalidateSession(),
  });
};
