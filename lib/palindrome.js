import { isString} from './helpers.js';
import { reverse } from './reverse';
export function palindrome(str) {
    if(isString(str)){
      if(str.trim() === ''){
        return false;
      }
      const reversed = reverse(str.toLowerCase());
      return str.toLowerCase() === reversed;
    }
    return false;
  }
  console.assert(palindrome('hæh') === true, 'palindrome: skoðum hvort strengur er samhverfur');
  console.assert(palindrome('') === false, 'palindrome: ef strengur ef tómur skilum false');
  console.assert(palindrome(false) === false, 'ef strengur er ekki strengur skilum null');
  