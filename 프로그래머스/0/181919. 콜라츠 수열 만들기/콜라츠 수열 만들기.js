function solution(n) {
    const res = [n];
    let x = n;
    while(x!=1){
        x%2 ? x = x*3+1 : x = x/2;
        res.push(x);
    }
    return res;
}