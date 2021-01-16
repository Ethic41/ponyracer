/*
   Bismillahirrahmanirraheem
   Author: Dahir Muhammad Dahir
   Date: 13-December-2020 6:39 AM
   About: I will tell u later
*/

import { PonyModel } from '@/models/PonyModel';

export interface RaceModel {
  id: number;
  name: string;
  ponies: Array<PonyModel>;
  startInstant: string;
}
