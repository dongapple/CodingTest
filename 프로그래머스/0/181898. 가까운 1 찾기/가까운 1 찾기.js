const solution = (arr, idx) => idx ? (arr.map((v, i) => v * i).filter((v, i) => i >= idx && v !== 0)[0] || -1) : arr[0]===1? 0 : -1;
