// Lấy nút đăng nhập
let closeBtn = document.getElementById("closeBtn");
let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");

closeBtn.onclick = function() {
    location.href = "http://127.0.0.1:5500/home_page.html";
};

yesBtn.onclick = function() {
    alert("Đăng xuất thành công");
    localStorage.removeItem("loginInfo")
    location.href = "http://127.0.0.1:5500/login_page.html";
}

noBtn.onclick = function() {
    location.href = "http://127.0.0.1:5500/home_page.html";
}