import { isString } from "./helpers";
const VOWELS = 'aeiouyáéýúíóöæ'.split('');
function vowels(str) {
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