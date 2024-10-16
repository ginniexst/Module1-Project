
// Đăng xuất
let logoutBtn = document.getElementById("logOutBtn");

logoutBtn.onclick = function() {
    location.href = "http://127.0.0.1:5500/login_page.html#";
};

// Render thông tin
let studentList = JSON.parse(localStorage.getItem("studentList"));
let tbody = document.getElementById("tbody");

function render() {
    for (let student of studentList) {
        let html = "";
        html = `
            <tr>
                <td>${student.id}</td>
                <td>${student.code}</td>
                <td>${student.name}</td>
                <td>${student.yob}</td>
                <td>${student.address}</td>
                <td></td>
                <td>${student.status}</td>
                <td>${student.class}</td>
                <td>
                    <span class="button button-edit">Sửa</span>
                </td>
                <td>
                    <span class="button button-delete">Xoá</span>
                </td>
            </tr>
        `;
        tbody.innerHTML += html;
    }
};
