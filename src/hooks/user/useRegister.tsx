import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { serverURL } from '@/hooks/apiConfig';

const API_URL = `${serverURL}/users`;

interface CreateUserRequest {
  email: string;
  password: string;
}

const createUser = async (request: CreateUserRequest) => {
  await axios.post(API_URL, request, {
    withCredentials: true,
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: (request: CreateUserRequest) => createUser(request),
  });
};
