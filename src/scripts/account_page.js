// Đăng xuất
let logoutBtn = document.getElementById("logOutBtn");

logoutBtn.onclick = function () {
    location.href = "http://127.0.0.1:5500/login_page.html#";
};

// Render thông tin
let accountList = JSON.parse(localStorage.getItem("accountList"));
let tbody = document.getElementById("tbody");

function render() {
    for (let account of accountList) {
        let html = "";
        let status = "";
        if (account.status) {
            status = "Đang hoạt động"
        } else {
            status = "Đang bị khoá"
        }
        html = `
            <tr>
                <td>${account.id}</td>
                <td>${account.email}</td>
                <td>${account.password}</td>
                <td>${account.name}</td>
                <td>${status}</td>
                <td>
                    <span class="button button-edit">Khoá</span>
                </td>
                <td>
                    <span class="button button-delete">Mở khoá</span>
                </td>
            </tr>
        `;
        tbody.innerHTML += html;
    }
};

render();
