// gloal scope should always be listed at the top
var gloalVar = 'Hello World!';

function sayHello() {
    console.log(gloalVar);

    //local scope/function scope
    var funcVar= 'I\'m scoped inside a funtion';
    console.log(funcVar);
}
sayHello();
console.log(gloalVar);
// console.log(funcVar); // cannt b/c inside a function


//block scope
if (true){
    var blockVar = 'I\'m inside a block';
    console.log(blockVar);
 // let is sorta a var. let allows for reassingment
 // stores a constant value only. cannot be reassigned

}
console.log(blockVar);

function secondFunction() {
    // console.log(funcVar);
}
secondFunction();


// nested scope
function outerFunc(){
    const outer = 'I\'m defined in outerFunc';
    console.log(outer);

    function innerFunc(){
        const inner = 'I\'m defined in innerFunc';
        console.log(inner);
    }
    // innerFunc();
    // console.log(inner);
    return innerFunc
}
outerFunc()();
// innerFunc();

