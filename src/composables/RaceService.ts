/* 
   Bismillahirrahmanirraheem
   Author: Dahir Muhammad Dahir
   Date: 15-December-2020 11:30 AM
   About: I will tell u later
*/

import { RaceModel } from '@/models/RaceModel';
import axios from 'axios';

export function useRaceService() {
  return {
    async list(): Promise<Array<RaceModel>> {
      const response = await axios.get<Array<RaceModel>>('https://ponyracer.ninja-squad.com/api/races', {
        params: { status: 'PENDING' }
      });
      return Promise.resolve(response.data);
    }
  };
}
