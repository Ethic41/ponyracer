/* 
   Bismillahirrahmanirraheem
   Author: Dahir Muhammad Dahir
   Date: 14-December-2020 7:32 AM
   About: I will tell u later
*/

import { formatDistanceToNowStrict, parseISO } from 'date-fns';

export default function fromNow(timeString: string): string {
  const date: Date = parseISO(timeString);
  return formatDistanceToNowStrict(date, { addSuffix: true });
}
