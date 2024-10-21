import { isString} from './helpers.js';
export function longest(str) {
    if(isString(str)){
      const split = str.split(' ');
      let staerst = split[0];
      for(let i = 1; i < split.length; i++){
        if(split[i].length > staerst.length){
          staerst = split[i];
        }
      }
      return staerst;
    }
    return null;
}