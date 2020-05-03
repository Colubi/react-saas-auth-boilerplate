import apiClient from './apiClient';

const USER_PATH = '/user';

type RegisterDto = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  allowExtraEmails: boolean;
};

type ResetPasswordDto = {
  currentPassword: string;
  newPassword: string;
};

export const updateProfileApi = (userDto: Partial<RegisterDto>) =>
  apiClient.put(`${USER_PATH}/me`, userDto);

export const registerApi = (registerDto: RegisterDto) =>
  apiClient.post(`${USER_PATH}`, registerDto);

export const getMeApi = () => apiClient.get(`${USER_PATH}/me`);

export const resetPasswordApi = (resetPasswordDto: ResetPasswordDto) =>
  apiClient.put(`${USER_PATH}/me/password`, resetPasswordDto);
