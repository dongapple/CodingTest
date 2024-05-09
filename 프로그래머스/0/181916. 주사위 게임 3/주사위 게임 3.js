function solution(a, b, c, d) {
    const dic = [a,b,c,d]
    dic.sort();
    const [ x,y,z,w] = dic
    if( x===y && y===z && z===w ){
        return x*1111;
    }else if( (y===z && x===y) || (y===z && y===w)){
        return x===y ? Math.pow((y * 10 + w), 2) : Math.pow((y * 10 + x), 2);
    }else if( x===y && z===w && x!=w){
        return (x+w) * Math.abs(x-w)
    }else if( (x===y && z!=w )||(y===z&& x!=w)||(z===w && x!=y)){
        return (x===y ? z*w : (y===z ? x*w : z===w ? x*y : null))
    }else if (x!=y!=z!=w){
        return x
    }
    return dic;
}