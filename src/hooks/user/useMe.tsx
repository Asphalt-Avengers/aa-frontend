import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { z } from 'zod';

import { serverURL } from '@/hooks/apiConfig';

const API_URL = `${serverURL}/users/me`;

const userSchema = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const getMe = async () => {
  const response = await axios.get(API_URL, { withCredentials: true });
  return userSchema.parse(response.data);
};

export const useMe = () => {
  return useQuery({
    queryKey: ['currentUser'],
    queryFn: () => getMe(),
    retry: false,
  });
};
