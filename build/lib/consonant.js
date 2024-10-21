import { isString } from "./helpers.js";
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');
export function consonants(str) {
    if(isString(str)){
      let fjoldi = 0;
      for(let stafur in CONSONANTS){
        let cons = CONSONANTS[stafur]
        if(str.includes(cons)){
          fjoldi++;
        }
      }
      return fjoldi;
    }
    return 0;
}