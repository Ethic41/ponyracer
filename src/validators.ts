/**
 * Description
 * @authors Dahir Muhammad Dahir (dahirmuhammad3@gmail.com)
 * @date    2020-12-28 15:56:15
 * @version 1.0.0
 */

function isOldEnough(value: number): boolean {
  return value <= new Date().getFullYear() - 18;
}

export { isOldEnough };
