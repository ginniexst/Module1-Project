// Đăng xuất
let logoutBtn = document.getElementById("logOutBtn");
let courseList = JSON.parse(localStorage.getItem("courseList"));
let tbody = document.getElementById("tbody");
let addBtn = document.getElementById("addBtn");
let addFormDiv = document.getElementById("addFormDiv");
let span = document.getElementsByClassName("close")[0];
let closeBtn = document.getElementById("closeBtn");

console.log(addBtn);



logoutBtn.onclick = function () {
    location.href = "http://127.0.0.1:5500/logout_page.html";
};

// Render thông tin

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

addBtn.onclick = function() {
    addFormDiv.style.display = "block";
}

span.onclick = function() {
    addFormDiv.style.display = "none";
}

closeBtn.onclick = function() {
    addFormDiv.style.display = "none";
}

// Sắp xếp tăng dần
// let ascending = document.getElementById("sortAscending");
// ascending.onclick = function () {
//     let sortAscending = courseList.slice(0);
//     sortAscending.sort(function (a, b) {
//         let x = a.code.toLowerCase();
//         let y = b.code.toLowerCase();
//         return x < y ? -1 : x > y ? 1 : 0;
//     });
//     localStorage.setItem(JSON.stringify("courseList", sortAscending));
//     render();
// };


// Sắp xếp giảm dần
// let descending = document.getElementById("sortDescending");
// descending.onclick = function () {
//     let sortDescending = courseList.slice(0);
//     sortDescending.sort(function (a, b) {
//         let x = a.code.toLowerCase();
//         let y = b.code.toLowerCase();
//         return x > y ? -1 : x < y ? 1 : 0;
//     });
//     console.log(sortDescending);
    
//     localStorage.setItem("courseList", JSON.stringify(sortDescending));
//     render();
// }


