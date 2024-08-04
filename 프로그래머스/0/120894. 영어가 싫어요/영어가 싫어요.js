function solution(numbers) {
    const numMap = {
        "zero": 0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9
    };

    let result = numbers;

    for (const [word, digit] of Object.entries(numMap)) {
   
        const regex = new RegExp(word, 'g');
     
        result = result.replace(regex, digit);
    }


    return result*1;
}
