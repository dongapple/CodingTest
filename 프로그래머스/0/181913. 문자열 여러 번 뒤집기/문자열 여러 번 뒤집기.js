function solution(my_string, queries) {
    let str = my_string;
    queries.forEach(([a,b])=>{
        const arr = [];
        arr.push(str.slice(0,a));
        arr.push(str.slice(a,b+1).split("").reverse().join(""));
        arr.push(str.slice(b+1,str.length));
        str=arr.join("")
    })
    
    return str;
}