const solution = (price, money, count) => 
Math.max((count * (count + 1) / 2) * price - money, 0);
