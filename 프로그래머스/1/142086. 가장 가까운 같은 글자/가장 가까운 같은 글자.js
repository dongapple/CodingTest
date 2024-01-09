const solution = s => {
    let arr = [];
  
    return [...s].map((v,i)=>{
        let index = !arr.includes(v)?-1:i-arr.lastIndexOf(v);
        arr.push(v);
        return index
    }
  )
}
