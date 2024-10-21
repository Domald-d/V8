import { isString, splitOnWhitespace } from "./helpers.js";
export function reverse(str) {
    if(isString(str)){
      const split = splitOnWhitespace(str);
      const reversed = split.reverse();
    
      return reversed.join('')
    }
    return null;
}