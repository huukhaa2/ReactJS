// immutability: khả năng không thay đổi được trạng thái bên trong của 1 object nào đó
// mutate: thay đổi trạng thái bên trong

// trường hợp bị mutate mà chúng ta không mong muốn
// function f1(arr) { return arr[0]; }
// function f2(arr) { arr.sort(); return 1; }
// function main() {
//     const a = [2, 1, 3];
//     f2(a);
//     const b = f1(a);
//     console.log(b);
// }
// main();

// giải pháp
// // concat
// var b = [1, 2, 3];
// var c1 = [].concat(b, 4); // 
// var c2 = [4].concat(b); // eslint-disable-line import/no-unresolved
// console.log(b);
// console.log(c1);
// console.log(c2);


// // rest
// var b = [1, 2, 3];
// var c1 = [...b, 4];
// var c2 = [4, ...b];
// console.log(b);
// console.log(c1);
// console.log(c2);



// // slice()
// var b = [1, 2, 3];  
// // var c = b.slice();  // tạo ra 1 array mới 
// var c = [...b.slice(0, 2), 4, ...b.slice(2)];  // thêm số 4 vào vị trí số 2 của mảng 
// console.log(b);
// // c.push(4); thêm vào cuối
// console.log(c);

 



// // object
// var obj = { name: 'Hoang', gfs:['Quynh', 'Tam'] };
// var c = Object.assign({}, obj);
// c.name = 'Tai';
// console.log(c);
// console.log(obj);




var obj = { name: 'Hoang', gfs:['Quynh', 'Tam'] };
var c = Object.assign({}, obj); // copy những cái key và value   
c = {...obj, name: 'Thien'};
obj.gfs.push('lan phuong');

var nam = {...obj, name: 'Nam', gfs: [...obj.gfs, 'Ngoc Phuong']}
console.log(nam);
console.log(obj);