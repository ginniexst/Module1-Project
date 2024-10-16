// Đăng xuất
let logoutBtn = document.getElementById("logOutBtn");

logoutBtn.onclick = function() {
    location.href = "http://127.0.0.1:5500/logout_page.html";
};

// Render thông tin
let courseList = JSON.parse(localStorage.getItem("courseList"));
let tbody = document.getElementById("tbody");

function render() {
    
}