function solution(num_list) {
   let answer =[0,0]
   for (const num of num_list){
       answer[num%2]++
   }
    return answer
}