function solution(num_list) {
    let totalOperations = 0; // 나누기 연산의 총 횟수를 저장할 변수

    for (let num of num_list) {
        while (num > 1) {
            if (num % 2 === 0) {
                // 짝수인 경우
                num = num / 2;
            } else {
                // 홀수인 경우
                num = (num - 1) / 2;
            }
            totalOperations++; // 나누기 연산 횟수 증가
        }
    }

    return totalOperations; // 총 연산 횟수
}