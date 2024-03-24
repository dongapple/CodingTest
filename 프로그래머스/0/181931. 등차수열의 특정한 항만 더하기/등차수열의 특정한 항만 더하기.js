const solution = (a, d, included) => included.map((v,i)=>v?i*d+a:0).reduce((a,c)=>a+c)
