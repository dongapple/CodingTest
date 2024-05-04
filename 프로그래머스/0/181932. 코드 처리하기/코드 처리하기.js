function solution(code) {
   let ret ="";
   let mode = false;
    [...code].forEach((v,i)=>{
        if(v==1) {
            mode = !mode;
        }else if((i + mode ) % 2 === 0) {
            ret = ret + v;
        } 
    })
    return ret.length == 0 ? "EMPTY": ret;
}