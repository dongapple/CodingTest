function solution(s1, s2) {
    let answer = 0;
    for(const char1 of s1){
        for(const char2 of s2){
            if(char1==char2) answer++;   
        }
    }
    return answer;
}