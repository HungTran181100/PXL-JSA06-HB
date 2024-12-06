// Bài 1
let a = 10;
let b = 10;
if (a > b) {
  console.log(a, "là số lớn nhất");
} else if (a < b) {
  console.log(b, "là số lớn nhất");
} else {
  console.log("a và b bằng nhau");
}

// Bài 2
let x = 3;
let y = -7;
let z = 2;
let tich = x * y * z;
if (tich > 0) {
  alert("Dấu của tích 3 số là +");
} else if (tich < 0) {
  alert("Dấu của tích 3 số là -");
}

// Bài 3
for (let i = 0; i <= 15; i++) {
  if (i % 2 == 0) {
    console.log(i, "là số chẵn");
  } else {
    console.log(i, "là số lẻ");
  }
}
