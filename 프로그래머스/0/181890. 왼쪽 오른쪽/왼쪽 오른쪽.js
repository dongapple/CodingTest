const solution = (str_list) => {
    const idx_l = str_list.indexOf("l")
    const idx_r = str_list.indexOf("r")
    // return str_list.length
    if(idx_l>=0 && idx_r>=0){
        if(idx_l<idx_r) return str_list.slice(0,idx_l);
        else if(idx_l>idx_r) return str_list.slice(idx_r+1,str_list.length);
    }else if(idx_l == -1 && idx_r >= 0){
        return str_list.slice(idx_r+1,str_list.length);
    }else if(idx_l >= 0 && idx_r == -1){
        return str_list.slice(0,idx_l);
    }else return []
 
}