/* 
   Bismillahirrahmanirraheem
   Author: Dahir Muhammad Dahir
   Date: 14-December-2020 10:32 PM
   About: I will tell u later
*/

import { PonyModel } from '@/models/PonyModel';
import { ponyImagePath } from '@/utils/statics';

export function getPonyImageUrl(pony: PonyModel): string {
  return `${ponyImagePath}pony-${pony.color.toLowerCase()}.gif`;
}
