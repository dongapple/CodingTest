const solution = num => (num.every(n => n === 0))? "0":num.sort((a,b)=>`${a}${b}`/1-`${b}${a}`/1).reverse().join("")