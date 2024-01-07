function solution(s) {
   return [...s].sort((a,b)=> a > b ? -1 : 1).reduce((a,c)=>a+c)
}