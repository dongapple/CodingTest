function solution(my_string) {
    const res = Array.from({ length: 52 }, () => 0); 
    [...my_string].forEach(char => {
        const charCode = char.charCodeAt();
        if (charCode >= 65 && charCode <= 90) 
            res[charCode - 65]++;
        else if (charCode >= 97 && charCode <= 122) 
            res[charCode - 71]++;
    });
    return res;
}
