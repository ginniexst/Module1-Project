
let logoutBtn = document.getElementById("logOutBtn");
let addBtn = document.getElementById("addBtn");

// Đăng xuất
logoutBtn.onclick = function() {
    location.href = "http://127.0.0.1:5500/login_page.html#";
};

// Render thông tin
let classList = JSON.parse(localStorage.getItem("classList"));
let tbody = document.getElementById("tbody");

function render() {
    for (let cl of classList) {
        let html = "";
        html = `
            <tr>
                <td>${cl.id}</td>
                <td>${cl.code}</td>
                <td>${cl.name}</td>
                <td>${cl.teacher}</td>
                <td>${cl.description}</td>
                <td>${cl.studentNumber}</td>
                <td>${cl.status}</td>
                <td>${cl.course}</td>
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

render();

