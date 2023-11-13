function solution(my_string, k) {
    var answer = '';
    while(k){
        answer += my_string;
        k--;
    }
    return answer;
}