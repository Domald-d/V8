import { isString } from "./helpers.js";
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');
export function consonants(str) {
    if(isString(str)){
      let fjoldi = 0;
      for(let stafur of CONSONANTS){
        if(str.includes(stafur)){
          fjoldi += (str.split(stafur).length - 1)
        }
      }
      return fjoldi;
    }
    return 0;
}