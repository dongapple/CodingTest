function solution(keyinput, board) {
    const boardSize = board.map(elm => Math.floor(elm/2))
    const result =[0,0]
    
    for(const key of keyinput){
        switch(key) {
          case 'left': 
            if(result[0]>(-boardSize[0])) result[0]-=1
          break;

          case 'right':  
            if(result[0]<(boardSize[0])) result[0]+=1
          break;
                
          case 'up': 
            if(result[1]<(boardSize[1])) result[1]+=1
          break;
                 
          case 'down':
            if(result[1]>-(boardSize[1])) result[1]-=1
          break;

          default:
            console.log("error")
          break;
        }
    }
    
    return result;
}