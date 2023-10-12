function solution(numer1, denom1, numer2, denom2) {
    let bunja = numer1*denom2 + numer2*denom1
    let bunmo = denom1*denom2
    for(let i = 1000; i > 0; i--){
        if(bunja%i==0&&bunmo%i==0){
            bunja = (bunja/i);
            bunmo = (bunmo/i);
        }
    }
    return [bunja,bunmo]
}