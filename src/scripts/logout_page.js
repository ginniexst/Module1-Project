<<<<<<< HEAD
// Lấy nút đăng nhập
let loginBtn = document.getElementById("loginBtn");
let accList = JSON.parse(localStorage.getItem("accList"));
=======
<<<<<<<< HEAD:src/scripts/login_page.js
// Lấy nút đăng nhập
let loginBtn = document.getElementById("loginBtn");
let accountList = JSON.parse(localStorage.getItem("accountList"));
>>>>>>> cde8806f8614d75bb83e1d5a0af7c17228e638a6

loginBtn.onclick = function() {
    // Lấy email và pw nhập vào
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPw").value;

    // Tìm tài khoản xem có tồn tại hay không
<<<<<<< HEAD
    let find = accList.find(function(element, index) {
=======
    let find = accountList.find(function(element, index) {
>>>>>>> cde8806f8614d75bb83e1d5a0af7c17228e638a6
        return element.email === email;
    });    

    if (!find) {
        alert(`Không có tài khoản với email: ${email} trong hệ thống`)
    } else {
<<<<<<< HEAD
        if (find.pw !== password) {
=======
        if (find.password !== password) {
>>>>>>> cde8806f8614d75bb83e1d5a0af7c17228e638a6
            alert("Mật khẩu không đúng");
        } else {
            alert("Đăng nhập thành công");
            location.href = "http://127.0.0.1:5500/home_page.html"
        }
    };
}


<<<<<<< HEAD
=======
========
// Lấy nút đăng nhập
let loginBtn = document.getElementById("loginBtn");
<<<<<<< HEAD
let accList = JSON.parse(localStorage.getItem("accList"));
=======
let accountList = JSON.parse(localStorage.getItem("accountList"));
>>>>>>> remotes/origin/main

loginBtn.onclick = function() {
    // Lấy email và pw nhập vào
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPw").value;

    // Tìm tài khoản xem có tồn tại hay không
<<<<<<< HEAD
    let find = accList.find(function(element, index) {
=======
    let find = accountList.find(function(element, index) {
>>>>>>> remotes/origin/main
        return element.email === email;
    });    

    if (!find) {
        alert(`Không có tài khoản với email: ${email} trong hệ thống`)
    } else {
<<<<<<< HEAD
        if (find.pw !== password) {
=======
        if (find.password !== password) {
>>>>>>> remotes/origin/main
            alert("Mật khẩu không đúng");
        } else {
            alert("Đăng nhập thành công");
            location.href = "http://127.0.0.1:5500/home_page.html"
        }
    };
}


>>>>>>>> cde8806f8614d75bb83e1d5a0af7c17228e638a6:src/scripts/logout_page.js
>>>>>>> cde8806f8614d75bb83e1d5a0af7c17228e638a6
