
// Đăng xuất
let logoutBtn = document.getElementById("logOutBtn");

logoutBtn.onclick = function () {
    location.href = "http://127.0.0.1:5500/login_page.html#";
};

// Render thông tin
let studentList = JSON.parse(localStorage.getItem("studentList"));
let tbody = document.getElementById("tbody");

// Hiển thị 10 khoá trên 1 trang
let pageInfo = document.getElementById("page-info");
let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");
let itemsPerPage = 10;
let currentPage = 1;


function render() {
    tbody.innerHTML = "";
    let startIndex = (currentPage - 1) * itemsPerPage;
    let endIndex = startIndex + itemsPerPage;
    let pageData = studentList.slice(startIndex, endIndex);

    for (let student of pageData) {
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
                    <span class="button button-edit" onclick="openEditForm()">Sửa</span>
                </td>
                <td>
                    <span class="button button-delete" onclick="openDelForm()">Xoá</span>
                </td>
            </tr>
        `;
        tbody.innerHTML += html;
    };
    updatePagination();

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

// Đóng modal cập nhật
let editFromDiv = document.getElementById("editFormDiv");
let editSpan = document.getElementById("editSpan");
let closeEdit = document.getElementById("closeEdit");

closeEdit.onclick = function () {
    editFormDiv.style.display = "none";
};
editSpan.onclick = function () {
    editFormDiv.style.display = "none";
}

// Đóng modal xác nhận xóa
let delFormDiv = document.getElementById("delFormDiv");
let delSpan = document.getElementById("delSpan");
let noBtn = document.getElementById("noBtn");

delSpan.onclick = function () {
    delFormDiv.style.display = "none";
};
noBtn.onclick = function () {
    delFormDiv.style.display = "none";
};

// Xoá giá trị ô input
function resetInput() {
    let elements = document.getElementsByTagName("input");
    for (var i = 0; i < elements.length; i++) {
        elements[i].value = "";
    }
};

// event cho nút sửa/xoá
function openEditForm() {
    editFormDiv.style.display = "block";
};
function openDelForm() {
    delFormDiv.style.display = "block";
};

// update pagination
function updatePagination() {
    let totalPages = Math.ceil(studentList.length / itemsPerPage);
    pageInfo.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
        let html = "";
        html = `
            <span>${i}</span>
        `;
        pageInfo.innerHTML += html;
    }
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
}

prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        render();
    }
});

nextButton.addEventListener('click', () => {
    let totalPages = Math.ceil(studentList.length / itemsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        render();
    }
});