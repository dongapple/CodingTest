const solution = food =>{
    let ready = '';
    food.forEach((v,i)=>{
      ready += String(i).repeat(Math.floor(food[i]/2));            
    })
    return ready + 0 + [...ready].reverse().join('')
}