const solution = (my, s, e) => my.slice(0,s) + [...my.slice(s,e+1)].reverse().join("") + my.slice(e+1)