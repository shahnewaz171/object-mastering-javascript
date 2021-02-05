//===Asynchronous Interval===//
function doSomething(){
    console.log(3333);
}
console.log(2222);

//another way
setInterval(() => {    // It execute again and again as like loop
    console.log('See you later.');
}, 1000);
console.log(4444);
//===End Asynchronous Interval===//