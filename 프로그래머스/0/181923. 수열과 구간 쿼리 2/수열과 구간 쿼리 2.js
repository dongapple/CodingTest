function solution(arr, queries) {
    const res = queries.map((v)=>{
        const [s,e,k]=[...v];
        const elm = arr.slice(s,e+1).filter(v=>k<v)
        return elm.length==0?-1:Math.min(...elm)
    })
    return res;
}










