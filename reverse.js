var sentence = "My name is AAzim and father is Hazu Abul Hosen. My mother name is Johura khatun.";

var reverse = "";

for(var i = 0; i < sentence.length; i++) {
    reverse = sentence[i] + reverse;
}
console.log(reverse);