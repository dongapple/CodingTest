function solution(s) {
    let answer = '';
    for(const v of s){
    if(s.indexOf(v)===s.lastIndexOf(v)) answer +=v}
    return [...answer].sort().join("");
}