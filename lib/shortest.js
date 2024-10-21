import { isString} from './helpers.js';
export function shortest(str) {
    if(isString(str)){
      const split = str.split(' ');
      let minnst = split[0];
      for(let i = 1; i < split.length;i++){
        if(split[i].length < minnst.length){
          minnst = split[i]
        }
      }
      return minnst;
    }
    return null;
}