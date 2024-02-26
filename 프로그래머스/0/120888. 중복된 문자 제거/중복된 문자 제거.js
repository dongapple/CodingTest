function solution(my_string) {
    const res = []
    my_string.split("").forEach(v=>res.includes(v)?"":res.push(v))
    return res.join("")
}