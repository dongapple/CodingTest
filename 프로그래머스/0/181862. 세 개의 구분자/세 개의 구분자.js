function solution(myStr) {
    const res=[]
     myStr.split("a").map(v=>v.split("b").map(v=>v.split("c").forEach(v=>v?res.push(v):null)))
    return res.length !== 0?res:["EMPTY"]
}