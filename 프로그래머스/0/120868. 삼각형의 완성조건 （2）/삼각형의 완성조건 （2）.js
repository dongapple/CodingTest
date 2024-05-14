function solution(sides) {
    const res = []
    const [sort, long] = sides.sort((a,c)=>a-c)
    for(let i = long; long - sort + 1 <=i ;i--){
        res.push(i)
    }
    for(let i = long + 1 ; long + sort > i ; i ++ ){
        res.push(i)
    }
    return res.length
}