const solution =arr=> {
    const maxValue = Math.max.apply(null, arr);
    return [maxValue , arr.indexOf(maxValue)]
}