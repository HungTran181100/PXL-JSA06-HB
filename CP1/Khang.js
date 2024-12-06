const nhapso = document.getElementById("nhap");
console.log(nhapso);
nhapso.addEventListener("submit",function (event) {
    event.preventDefault();
    const so = document.getElementById("number").value.trim();
    //console.log(so);
    let num = so*1.8 + 32;
    console.log(num);
});
