var sentence = "My name is AAzim and father is Hazu Abul Hosen. My mother name is Johura khatun.";

var count = 0;
for(i = 0; i < sentence.length; i++) {
    var char = sentence[i];
    if(char == " " && sentence[i - 1] != " ") {
        count++;
    }
}
console.log(count);