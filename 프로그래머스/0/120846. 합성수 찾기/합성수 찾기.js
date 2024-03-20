function solution(n) {
    const res = []
    for(let i=1; i<=n; i++){
        const arr = []
        for(let l=1; l<=i;l++){
            if(!(i%l))arr.push(l)
        }
        if(arr.length>=3) res.push(i)
    }
    return res.length
}