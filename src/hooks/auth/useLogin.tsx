import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { serverURL } from '@/hooks/apiConfig';

const API_URL = `${serverURL}/sessions`;

interface LoginRequest {
  email: string;
  password: string;
}

const createSession = async (request: LoginRequest) => {
  await axios.post(API_URL, request, {
    withCredentials: true,
  });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (request: LoginRequest) => createSession(request),
  });
};
