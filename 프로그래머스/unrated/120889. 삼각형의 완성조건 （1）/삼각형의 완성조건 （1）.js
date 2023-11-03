function solution(sides) {
    let [a,b,long] = sides.sort((a, b) => a - b)
    return long < a+b? 1 : 2;
}