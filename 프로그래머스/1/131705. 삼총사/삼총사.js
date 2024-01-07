function solution(n) {
    var counst = 0;
    for(i=0; i< n.length-2;i++) {
        for(j=1 ;j<n.length-i-1;j++){
            for(z=j+1; z<n.length-i;z++ ){
                if((n[i]+n[i+j]+n[z+i])===0)counst++
                }
            }
    }
    return counst;
}