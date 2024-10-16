// Lấy nút đăng nhập
let loginBtn = document.getElementById("loginBtn");
let accList = JSON.parse(localStorage.getItem("accList"));

loginBtn.onclick = function() {
    // Lấy email và pw nhập vào
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPw").value;

    // Tìm tài khoản xem có tồn tại hay không
    let find = accList.find(function(element, index) {
        return element.email === email;
    });    

    if (!find) {
        alert(`Không có tài khoản với email: ${email} trong hệ thống`)
    } else {
        if (find.pw !== password) {
            alert("Mật khẩu không đúng");
        } else {
            alert("Đăng nhập thành công");
            location.href = "http://127.0.0.1:5500/home_page.html"
        }
    };
}


