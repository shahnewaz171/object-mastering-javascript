//===Asynchronous setTimeout===//
function doSomething(){
    console.log(3333);
}
console.log(2222);
// setTimeout(doSomething, 1000); // [1sec = 1000 milesec]

// setTimeout(function(){
//     console.log('Lazy and waiting');
// }, 4000);

//another way
setTimeout(() => {
    console.log('See you later.');
}, 4000);
console.log(4444);
//===End Asynchronous setTimeout===//
