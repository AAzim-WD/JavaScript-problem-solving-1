// declare variable

var AAzim = 800;
var Arzu = 700;
var Alif = 500;

// choose great person
// formula one

var max = Math.max(AAzim, Arzu, Alif);
console.log(max + " is bigger");

// choose great person
// formula two

if(AAzim > Arzu && AAzim > Alif) {
    console.log("AAzim is bigger");
}
else if(Arzu > AAzim && Arzu > Alif) {
    console.log("Arzu is bigger");
}else {
    console.log("Alif is bigger");
}

// choose great person
// formula three

if(AAzim > Arzu) {
   if(AAzim > Alif) {
    console.log("AAzim is bigger");
   }else {
    console.log("Alif is bigger");
   }
}else {
   if(Arzu > Alif) {
    console.log("Arzu is bigger");
   }else {
    console.log("Alif is bigger");
   }
}

// the end