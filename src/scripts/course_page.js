// Get Elements
let logoutBtn = document.getElementById("logOutBtn");
let courseList = JSON.parse(localStorage.getItem("courseList"));
let tbody = document.getElementById("tbody");
let addBtn = document.getElementById("addBtn");
let addFormDiv = document.getElementById("addFormDiv");
let span = document.getElementsByClassName("close")[0];
let closeCourse = document.getElementById("closeCourse");
let addCourse = document.getElementById("addCourse");
let addForm = document.getElementById("addForm");
let delCourse = document.getElementById("delCourse");


// Đăng xuất
logoutBtn.onclick = function () {
    location.href = "http://127.0.0.1:5500/logout_page.html";
};

// Render thông tin
function render() {
    tbody.innerHTML = "";
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
                    <span class="button button-edit" id="editCourse">Sửa</span>
                </td>
                <td>
                    <span class="button button-delete" id="delCourse">Xoá</span>
                </td>
            </tr>
        `;
        tbody.innerHTML += html;
    };

    // Thêm khoá học mới
    addForm.onsubmit = function (event) {
        event.preventDefault();

        let code = addForm.courseCode.value;
        let name = addForm.courseName.value;
        let time = addForm.courseTime.value;
        let findCode = courseList.find(element => element.code === code);
        let findName = courseList.find(element => element.courseName === name);
        let statusValue = addForm.courseStatus.value;
        let stt = new Boolean(true);
        if (statusValue == 0) {
            stt = false;
        }

        if (findCode) {
            alert(`Mã khoá học ${code} đã tồn tại`);
        } else {
            if (findName) {
                alert(`Tên khoá học ${name} đã tồn tại`);
            } else {
                if (time == 0) {
                    alert(`Thời gian phải lớn hơn 0`);
                } else {
                    let newCourse = {
                        id: courseList.length + 1,
                        code: addForm.courseCode.value,
                        courseName: addForm.courseName.value,
                        courseTime: addForm.courseTime.value,
                        status: stt
                    };
                    courseList.push(newCourse);
                    localStorage.setItem("courseList", JSON.stringify(courseList));
                    addFormDiv.style.display = "none";
                    addForm.courseCode.value = "";
                    addForm.courseName.value = "";
                    addForm.courseTime.value = "";
                    render();
                }
            }
        }
    };

    // Xoá khoá học
    delCourse.onclick = function() {
        
    }
};

render();

addBtn.onclick = function () {
    addFormDiv.style.display = "block";
};

span.onclick = function () {
    addFormDiv.style.display = "none";
};

closeCourse.onclick = function () {
    addFormDiv.style.display = "none";
};