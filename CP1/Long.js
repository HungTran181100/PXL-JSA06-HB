//Bài 1: Tính tổng các só  từ 1 đến n
function tinhTong(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(tinhTong(3)); // Output: 6
//Bài 2: Kiểm tra số nguyên tố
function laSoNguyenTo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(laSoNguyenTo(3)); // Output: true (3 là số nguyên tố)

//Bài 3: Tính giai thừa
function tinhGiaiThua(n) {
    if (n === 0 || n === 1) return 1;
    let giaiThua = 1;
    for (let i = 2; i <= n; i++) {
        giaiThua *= i;
    }
    return giaiThua;
}

console.log(tinhGiaiThua(5)); // Output: 120

//Bài 4: Chuyển đổi nhiệt độ
function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

console.log(celsiusToFahrenheit(25)); // Output: 77
console.log(fahrenheitToCelsius(77)); // Output: 25
