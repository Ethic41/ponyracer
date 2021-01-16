/* 
   Bismillahirrahmanirraheem
   Author: Dahir Muhammad Dahir
   Date: 25-December-2020 6:41 AM
   About: I will tell u later
*/

import { configure, defineRule } from 'vee-validate';
import { localize } from '@vee-validate/i18n';
import { min, required, confirmed, min_value } from '@vee-validate/rules';
import { isOldEnough } from './validators';

defineRule('min', min);
defineRule('required', required);
defineRule('confirmed', confirmed);
defineRule('min_value', min_value);
defineRule('isOldEnough', isOldEnough);

configure({
  validateOnInput: true,
  validateOnChange: true,
  generateMessage: localize('en', {
    messages: {
      required: context => `The ${context.field} is required.`,
      min: 'The {field} must be at least 0:{min} characters.',
      confirmed: 'The {field} does not match',
      min_value: 'The birth year must be 1900 or more',
      isOldEnough: `You're not old enough to bet on ponies.`
    }
  })
});
