import { isString } from "./helpers";
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');
function consonants(str) {
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
console.assert(consonants('bad') === 2, 'consonants: skilar fjölda samhljóða í streng');
console.assert(consonants('') === 0, 'consonants: ef strengur er tómur skilum við núll');
console.assert(consonants(false) === 0, 'consonant: ef strengur er ekki strengur skilum við núll');
