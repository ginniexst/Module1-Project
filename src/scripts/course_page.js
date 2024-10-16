// Đăng xuất
let logoutBtn = document.getElementById("logOutBtn");

closeBtn.onclick = function() {
    location.href = "http://127.0.0.1:5500/home_page.html";
};

// Render thông tin
let courseList = JSON.parse(localStorage.getItem("courseList"));
let tbody = document.getElementById("tbody");

function render() {
    for (let course of courseList) {
        let html = "";
        let status = "";
        if (course.status) {
            status = "Hoạt động";
        } else {
            status = "Không hoạt động";
        }
        html = `
            <tr>
                <td>${course.id}</td>
                <td>${course.code}</td>
                <td>${course.courseName}</td>
                <td>${course.courseTime}</td>
                <td>${status}</td>
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