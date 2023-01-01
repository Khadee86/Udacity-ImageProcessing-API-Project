"use strict";
// import {promises as fsPromises} from 'fs';
// const fileDir:string='';
// // Using an error-back
// // emptyDir(fileDir, function (err) {
// //   if (err) {
// //     console.error(err);
// //   } else {
// //     return true;
// //   }
// // });
// // function emptyFile(fileDir:string){
// //     fsPromises.readdir(fileDir, function (data: string) {
// //         if (data.length == 0) {
// //             const num =0;
// //             return num;
// //         }
// //     });
// // };
// function emptyFile(fileDir:string) {
//     return fsPromises.readdir(fileDir).then(files => {
//         return files.length === 0;
//     });
// }
// export default emptyFile;
