// Array--------------------------------------
let array = [1, 2, 3, 4, 5];
//           0  1  2  3  4 --> vị trí các phần tử trong ds
let name = ["Long", "Khang", "Huy", "Minh"];
console.log(array[4], array[1]);
// array.length -> tìm ra độ dài của danh sách
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
// push để thêm phần tử vào ds
array.push(6);
console.log(array);
// cập nhật giá trị trong ds
array[2] = 7;
console.log(array);
//Tìm kiếm -> vị trí của phần tử
console.log(array.indexOf(6));
console.log(array.indexOf(10));
// Xóa

let arr = ["a", "b", "c", "d"];
arr.splice(1, 3);

// 1: Ví trí bắt đầu xóa
// 3: Số lượng phần tử cần xóa
console.log(arr);

// Object -------------------------------------------
// let bienSo;
// console.log(bienSo);
// Khai báo object
let human = {
  ten: "Khang",
  tuoi: 30,
};
console.log(human);
console.log(human.ten);
console.log(human["tuoi"]);
//Thêm thuộc tính
human.gender = "male";
// Duyệt
for (let key in human) {
  console.log(key);
}
// Kiểm tra thuộc tính có trong object
if ("ten" in human) {
  console.log("Key ten có tồn tại");
} else {
  console.log("Key ten không tồn tại");
}

if (human.hasOwnProperty("tuoi")) {
  console.log("Key ten có tồn tại");
} else {
  console.log("Key ten không tồn tại");
}
// Xóa thuộc tính
delete human.ten;
console.log(human);
// CRUD ( Create Read Update Delete ) --------------------
let hocSinh = [
  { ten: "An", tuoi: 15, lop: "10A1" },
  { ten: "Bình", tuoi: 16, lop: "11A2" },
  { ten: "Châu", tuoi: 15, lop: "10A1" },
];

console.log(hocSinh[2].ten);
// Thêm học sinh mới tên là Dũng, tuổi 17, lớp 11A3 (Long)
// In ra tất cả học sinh trong danh sách (Huy)
// Cập nhật tuổi của học sinh tên Bình thành 17 (Khang)
// Xóa học sinh thứ 3 tên Châu. (Minh)

// {
//     { ten: "An", tuoi: 15, lop: "10A1" },
//     { ten: "Bình", tuoi: 17, lop: "10A1" },
//     { ten: "Dũng", tuoi: 17, lop: "11A3" },
// }

hocSinh.push({ ten: "Dũng", tuoi: 17, lop: "11A3" });
for (let i = 0; i < hocSinh.length; i++) {
  //   console.log(hocSinh[i].ten);
  //   console.log(hocSinh[i].tuoi);
  //   console.log(hocSinh[i].lop);
}
//hocSinh[2] = { ten: "Bình", tuoi: 17, lop: "11A2" };
//hocSinh[2].tuoi = 17
for (let i = 0; i < hocSinh.length; i++) {
  if (hocSinh[i].ten == "Bình") {
    hocSinh[i].tuoi = 17;
  }
}

hocSinh.splice(2, 1);
