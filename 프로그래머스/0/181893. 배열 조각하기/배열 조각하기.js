function solution(arr, query) {
    query.forEach((v, i) => {
        if (i % 2 === 0) { 
            if(arr.length-1-v) arr.splice(-(arr.length-1-v));
        } else if(i % 2 === 1) { 
            arr.splice(0, v);
        }
    });
    return arr;
}
