function solution(arr) {
    const stk = [];
    let i=0
    while( i < arr.length){
        if(!stk.length){
            stk.push(arr[i]);
            i++;
        }else if(stk.length && stk[stk.length-1] < arr[i]){
            stk.push(arr[i]);
            i++;
        }else if(stk.length  && stk[stk.length-1] >= arr[i]){
            stk.pop()
        }
    }
    return stk;
}