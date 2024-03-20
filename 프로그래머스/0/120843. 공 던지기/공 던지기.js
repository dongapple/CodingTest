function solution(numbers, k) {
   const res = []
   let playCount = 0
   let i = 0;
   while(playCount < k) {
       
       for(i; i < numbers.length && playCount < k; i += 2) {
           res.push(numbers[i])
           playCount++;
       }
       i-=numbers.length;
   }
    return res[res.length-1]
}
