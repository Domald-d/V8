import { isString} from './helpers.js';
import { reverse } from './reverse.js';
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