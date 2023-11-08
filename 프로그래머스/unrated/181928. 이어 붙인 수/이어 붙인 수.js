function solution(num_list) {
    return     Number(num_list.map(item=> item%2 ?item:'').join(''))+
    Number(num_list.map(item=> item%2 ?'':item).join(''))
}