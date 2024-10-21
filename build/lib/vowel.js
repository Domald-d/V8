import { isString } from "./helpers.js";
const VOWELS = 'aeiouyáéýúíóöæ'.split('');
export function vowels(str) {
    if(isString(str)){
      let fjoldi = 0;
      for(let stafur in VOWELS){
        let vow = VOWELS[stafur];
        if(str.includes(vow)){
          fjoldi++;
        }
      }
      return fjoldi;
    }
  return 0;
}