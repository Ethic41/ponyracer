/* 
   Bismillahirrahmanirraheem
   Author: Dahir Muhammad Dahir
   Date: 22-December-2020 10:54 PM
   About: I will tell u later
*/

import { useRouter } from 'vue-router';

export function useRouterService() {
  const router = useRouter();

  return {
    async goto(path: string) {
      await router.push({ name: path });
    }
  };
}
