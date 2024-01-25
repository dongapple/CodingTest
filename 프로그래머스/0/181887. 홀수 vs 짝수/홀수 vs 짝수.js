function solution(num_list) {
    let x = 0;
    let y = 0;
    num_list.forEach((v,i)=>i%2?x+=v:y+=v);
    return Math.max(x,y);
}