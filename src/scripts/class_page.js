let logoutBtn = document.getElementById("logOutBtn");
let classList = JSON.parse(localStorage.getItem("classList"));
let tbody = document.getElementById("tbody");
let addBtn = document.getElementById("addBtn");
let addFormDiv = document.getElementById("addFormDiv");
let span = document.getElementsByClassName("close")[0];
console.log(span);

let closeClass = document.getElementById("closeClass");
let addClass = document.getElementById("addClass");
let addForm = document.getElementById("addForm");

// Đăng xuất
logoutBtn.onclick = function() {
    location.href = "http://127.0.0.1:5500/login_page.html#";
};

// Render thông tin


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
                    <span class="button button-edit" id="editClass">Sửa</span>
                </td>
                <td>
                    <span class="button button-delete" id="delClass">Xoá</span>
                </td>
            </tr>
        `;
        tbody.innerHTML += html;
    }
};

render();

addBtn.onclick = function () {
    addFormDiv.style.display = "block";
};

span.onclick = function () {
    addFormDiv.style.display = "none";
};

closeClass.onclick = function () {
    addFormDiv.style.display = "none";
};