function solution(num_list, n) {
    var answer = [];
    for(let i=0; i<num_list.length/n;i++){
        const res=[];
        for(let j=0;j<n;j++){
            res.push(num_list[j+i*n])
        }
        answer.push(res)
    }
    
    return answer;
}