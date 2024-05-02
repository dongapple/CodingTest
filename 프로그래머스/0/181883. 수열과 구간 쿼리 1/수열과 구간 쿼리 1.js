function solution(arr, queries) {
    queries.forEach((query)=>{
        arr.forEach((elm,idx)=>{
            if(query[0]<=idx&&idx<=query[1]) {
                arr[idx] = ++elm; 
            }
        })
    })
    return arr;
}