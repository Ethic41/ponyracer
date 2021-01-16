/*
   Bismillahirrahmanirraheem
   Author: Dahir Muhammad Dahir
   Date: 21-December-2020 9:13 AM
   About: I will tell u later
*/

import { UserModel, UserLoginModel } from '@/models/UserModel';
import { UserResponseModel } from '@/models/UserResponseModel';
import axios from 'axios';

export function useUserService() {
  return {
    async register(userModel: UserModel): Promise<UserResponseModel> {
      const response = await axios.post<UserResponseModel>('https://ponyracer.ninja-squad.com/api/users', userModel);
      return Promise.resolve(response.data);
    },

    async authenticate(loginModel: UserLoginModel): Promise<UserResponseModel> {
      const response = await axios.post<UserResponseModel>('https://ponyracer.ninja-squad.com/api/users/authentication', loginModel);
      return Promise.resolve(response.data);
    }
  };
}
