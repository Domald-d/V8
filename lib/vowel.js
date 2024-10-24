import { isString } from "./helpers.js";
const VOWELS = 'aeiouyáéýúíóöæ'.split('');
export function vowels(str) {
    if(isString(str)){
      let fjoldi = 0;
      for(let stafur of VOWELS){
        if(str.includes(stafur)){
          fjoldi += (str.split(stafur).length - 1)
        }
      }
      return fjoldi;
    }
  return 0;
}