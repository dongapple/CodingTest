function solution(binomial) {
    const res =  binomial.split(" ")
    return  res[1]==="+"? res[0]/1+res[2]/1 :
            res[1]==="-"? res[0]/1-res[2]/1 :
            res[1]==="*"? res[0]/1*res[2]/1 :
            "error"
}