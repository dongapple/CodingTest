function solution(num_list) {
   let answer =[0,0]
   for (const num of num_list){
       if(!(num%2)){answer[0] = answer[0] + 1}
       else if(num%2){answer[1] = answer[1] + 1}
   }
    return answer
}