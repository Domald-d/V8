import { isString } from "./helpers";
export function reverse(str) {
    if(isString(str)){
      const split = str.split('');
      const reversed = split.reverse();
    
      return reversed.join('')
    }
    return null;
  }