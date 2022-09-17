// 1. reverse each word in the sentence.?
const string = "Welcome to this JavaScript Guide!"


const wordsReverser=(string)=>{
    var arr = string.split("");
    var output = [];
    for(var i = arr.length - 1;  i >= 0; i--){
        output.push(arr[i]);
    }
  return output.join("");
}

console.log(wordsReverser(string));