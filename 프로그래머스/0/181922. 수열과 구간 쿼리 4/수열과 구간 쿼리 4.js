function solution(arr, queries) {
    let res = [...arr];
    queries.forEach(([s,e,k])=>{
        res = res.map((v, i) => (s <= i && i <= e && i % k === 0 ) ? v + 1  : v);
    })
    return res;
}