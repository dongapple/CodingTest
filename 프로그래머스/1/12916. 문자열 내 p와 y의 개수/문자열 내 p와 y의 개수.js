const solution=(s)=>   {
    const arry=(w)=>s.toLowerCase().split("").filter((v)=>v==w).length
    return arry('p')==arry('y')?true:false;
}
