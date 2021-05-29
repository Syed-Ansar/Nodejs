// const { error } = require('console');
const fs = require("fs");

// reading files

// fs.readFile('./file.txt',(error,data) =>{
//     if(error){
//         console.log(error);
//     }
//     console.log(data.toString());
// });
// console.log('last line');

// writing files

// fs.writeFile('./file.txt','Hello  Syed Ansar!',() =>{
//     console.log('File is written!');
// });
// fs.writeFile('./file.txt','Hello  Syed Asrar!',() =>{
//     console.log('File is written!');
// });

// directories or files

// if(!fs.existsSync('./assets')){
// fs.mkdir('./assets',(error) =>{
//     if(error){
//         console.log(error);
//     }
//     console.log('Folder created');
// });
// }else{
//     fs.rmdir('./assets',(error) =>{
//         if(error){
//             console.log(error);
//         }
//         console.log('Delete Folder');
//     })
// }

// Deleting files

if (fs.existsSync("./deleteme.txt")) {
  fs.unlink("./deleteme.txt", (error) => {
    if (error) {
      console.log(error);
    }
    console.log("Delete me ");
  });
}
