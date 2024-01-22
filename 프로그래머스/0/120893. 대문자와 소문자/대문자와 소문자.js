function solution(str) {
   return [...str].map((v)=>v===v.toUpperCase()?v.toLowerCase():v.toUpperCase()).join("");
}