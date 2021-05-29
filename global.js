// global object

// console.log(global);

global.setTimeout(()=>{
    console.log('Syed Ansar!!');
    clearInterval(int);
},3000);

const int = setInterval(() => {
    console.log('net ninja');
}, 1000);

console.log(__dirname);
console.log(__filename);