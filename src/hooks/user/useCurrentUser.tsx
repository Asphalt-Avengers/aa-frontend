import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { z } from 'zod';

import { serverURL } from '@/hooks/apiConfig';

const API_URL = `${serverURL}/user`;

const userSchema = z.object({
  id: z.number(),
  firstName: z.string().nullable(),
  lastName: z.string().nullable(),
  email: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const getCurrentUser = async () => {
  const response = await axios.get(API_URL, { withCredentials: true });
  return userSchema.parse(response.data);
};

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ['currentUser'],
    queryFn: () => getCurrentUser(),
    retry: false,
  });
};
