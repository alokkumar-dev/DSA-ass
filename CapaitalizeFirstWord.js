// 3.capaitalize the first letter of Each word in given string?
const string = "how to capitalize each word";

const capitalize= (input)=> {  
    let words = input.split(' ');  
    let CapaitalWords = [];  
    words.forEach((words) => {  
        CapaitalWords.push(words[0].toUpperCase() + words.slice(1, words.length));  
    });  
    return CapaitalWords.join(' ');  
}

console.log(capitalize(string))