let logoutBtn = document.getElementById("logOutBtn");
let classList = JSON.parse(localStorage.getItem("classList"));
let tbody = document.getElementById("tbody");
let addBtn = document.getElementById("addBtn");
let addFormDiv = document.getElementById("addFormDiv");
let span = document.getElementsByClassName("close")[0];
let closeAdd = document.getElementById("closeAdd");
let addClass = document.getElementById("addClass");
let addForm = document.getElementById("addForm");

// Đăng xuất
logoutBtn.onclick = function() {
    location.href = "http://127.0.0.1:5500/logout_page.html#";
};

// Render thông tin
function render() {
    tbody.innerHTML = "";
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
    // Thêm lớp học
    addForm.onsubmit = function(event) {
        event.preventDefault();

        let code = addForm.classCode.value;
        let name = addForm.className.value;
        let num = addForm.classNumber.value;
        let statusNum = addForm.classStatus.value;

        let findCode = classList.find(element => element.code === code);
        let findName = classList.find(element => element.name === name);

        let status = "";
        if (statusNum == 1) {
            status = "Chờ lớp";
        } else if (statusNum == 2) {
            status = "Hoạt động";
        } else {
            status = "Kết thúc";
        };

        if (findCode) {
            alert(`Mã khóa học ${code} đã tồn tại`);
        } else {
            if (findName) {
                alert(`Tên khóa học ${name} đã tồn tại`);
            } else {
                if (num == 0) {
                    alert(`Sỉ số lớp học phải lớn hơn 0`);
                } else {
                    let newClass = {
                        id: classList.length + 1,
                        code: code,
                        name: name,
                        teacher: addForm.classTeacher.value,
                        description: addForm.classDescription.value,
                        studentNumber: num,
                        status: status,
                        course: ""
                    }
                    classList.push(newClass);
                    localStorage.setItem("classList", JSON.stringify(classList));
                    resetInput();
                    addFormDiv.style.display = "none";
                    render();
                }
            }
        }
    }
};

render();

// Mở modal thêm lớp học
addBtn.onclick = function () {
    addFormDiv.style.display = "block";
};

// Đóng modal thêm lớp học
span.onclick = function () {
    addFormDiv.style.display = "none";
};
closeAdd.onclick = function () {
    addFormDiv.style.display = "none";
};

// Đóng modal cập nhật lớp học
let editFromDiv = document.getElementById("editFormDiv");
let editSpan = document.getElementById("editSpan");
let closeEdit = document.getElementById("closeEdit");

closeEdit.onclick = function() {
    editFormDiv.style.display = "none";
};
editSpan.onclick = function() {
    editFormDiv.style.display = "none";
}

// Đóng modal xác nhận xóa
let delFormDiv = document.getElementById("delFormDiv");
let delSpan = document.getElementById("delSpan");
let noBtn = document.getElementById("noBtn");

delSpan.onclick = function() {
    delFormDiv.style.display = "none";
};
noBtn.onclick = function() {
    delFormDiv.style.display = "none";
};

// Xoá giá trị ô input
function resetInput() {
    var elements = document.getElementsByTagName("input");
    for (var i = 0; i < elements.length; i++) {
        elements[i].value = "";
    }
};