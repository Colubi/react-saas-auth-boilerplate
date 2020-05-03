import apiClient from './apiClient';

const AUTH_PATH = '/auth';

type LoginDto = {
  email: string;
  password: string;
};

export const loginApi = (loginDto: LoginDto) =>
  apiClient.post(`${AUTH_PATH}/login`, loginDto);
