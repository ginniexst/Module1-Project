
// Đăng xuất
let logoutBtn = document.getElementById("logOutBtn");

logoutBtn.onclick = function () {
    location.href = "http://127.0.0.1:5500/login_page.html#";
};

// Render thông tin
let studentList = JSON.parse(localStorage.getItem("studentList"));
let tbody = document.getElementById("tbody");

function render() {
    tbody.innerHTML = "";
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

    // Thêm sinh viên
    addForm.onsubmit = function (event) {
        event.preventDefault();

        let code = addForm.studentCode.value;
        let year = addForm.yob.value;
        let phone = addForm.phoneNumber.value;
        let phoneTest = /((09|03|07|08|05)+([0-9]{8})\b)/g;

        let findCode = studentList.find(element => element.code === code);

        if (findCode) {
            alert(`Mã sinh viên ${code} đã tồn tại`);
        } else {
            if (+year < 1995) {
                alert(`Năm sinh phải lớn hơn 1995`);
            } else {
                if (!phoneTest.test(phone)) {
                    alert(`Vui lòng nhập vào số điện thoại Việt Nam`);
                } else {
                    let newStudent = {
                        id: studentList.length + 1,
                        code: code,
                        name: addForm.studentName.value,
                        yob: year,
                        address: addForm.address.value,
                        phone: phone,
                        status: "Chờ lớp",
                        email: addForm.email.value,
                        sex: addForm.gender.value,
                        class: ""
                    };
                    studentList.push(newStudent);
                    localStorage.setItem("studentList", JSON.stringify(studentList));
                    resetInput();
                    addFormDiv.style.display = "none";
                    render();
                }
            }
        }

    }
};

render();

// Mở modal thêm sinh viên
addBtn.onclick = function () {
    addFormDiv.style.display = "block";
};

// Đóng modal thêm sinh viên
let addSpan = document.getElementById("addSpan");
let closeAdd = document.getElementById("closeAdd");

addSpan.onclick = function () {
    addFormDiv.style.display = "none";
};
closeAdd.onclick = function () {
    addFormDiv.style.display = "none";
};

// Xoá giá trị ô input
function resetInput() {
    var elements = document.getElementsByTagName("input");
    for (var i = 0; i < elements.length; i++) {
        elements[i].value = "";
    }
};
