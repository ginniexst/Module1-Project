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

// Hiển thị 10 khoá trên 1 trang
let pagination = document.getElementById("pagination");
let itemsPerPage = 10;
let currentPage = 1;

// Đăng xuất
logoutBtn.onclick = function () {
  location.href = "http://127.0.0.1:5500/logout_page.html";
};

// Render thông tin
function render() {
  tbody.innerHTML = "";
  let startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;
  let pageData = courseList.slice(startIndex, endIndex);

  for (let course of pageData) {
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
                    <span class="button button-edit" onclick="openEditForm()" >Sửa</span>
                </td>
                <td>
                    <span class="button button-delete" onclick="openDelForm()">Xoá</span>
                </td>
            </tr>
        `;
    tbody.innerHTML += html;
  }
  updatePagination();

  // Thêm khoá học mới
  addForm.onsubmit = function (event) {
    event.preventDefault();

    let code = addForm.courseCode.value;
    let name = addForm.courseName.value;
    let time = addForm.courseTime.value;
    let findCode = courseList.find((element) => element.code === code);
    let findName = courseList.find((element) => element.courseName === name);
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
            status: stt,
          };
          courseList.unshift(newCourse);
          localStorage.setItem("courseList", JSON.stringify(courseList));
          addFormDiv.style.display = "none";
          resetInput();
          render();
        }
      }
    }
  };
}

render();

// Hiển thị modal thêm mới
addBtn.onclick = function () {
  addFormDiv.style.display = "block";
};

// Đóng modal thêm mới
span.onclick = function () {
  addFormDiv.style.display = "none";
};
closeCourse.onclick = function () {
  addFormDiv.style.display = "none";
};

// Đóng modal cập nhật lớp học
let editFromDiv = document.getElementById("editFormDiv");
let editSpan = document.getElementById("editSpan");
let closeEdit = document.getElementById("closeEdit");

closeEdit.onclick = function () {
  editFormDiv.style.display = "none";
};

editSpan.onclick = function () {
  editFormDiv.style.display = "none";
};

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
}

// event cho nút sửa/xoá
function openEditForm() {
  editFormDiv.style.display = "block";
}
function openDelForm() {
  delFormDiv.style.display = "block";
}

// Update pagination
function updatePagination() {
  let totalPages = Math.ceil(courseList.length / itemsPerPage);
  pagination.innerHTML = "";

  // thêm Prev button
  let prevButton = document.createElement("button");
  prevButton.textContent = "Prev";
  prevButton.disabled = currentPage === 1;
  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      render();
    }
  });

  pagination.appendChild(prevButton);

  // Thêm số trang
  let maxPageButtons = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
  const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

  for (let i = startPage; i <= endPage; i++) {
    let pageButton = document.createElement("button");
    pageButton.textContent = i;
    pageButton.classList.add("page-number");
    if (i === currentPage) {
      pageButton.classList.add("active");
    }
    pageButton.addEventListener("click", () => {
      currentPage = i;
      render();
    });
    pagination.appendChild(pageButton);
  }
  // Thêm Next button
  let nextButton = document.createElement("button");
  nextButton.textContent = "Next";
  nextButton.disabled = currentPage === totalPages;
  nextButton.addEventListener("click", () => {
    let totalPages = Math.ceil(courseList.length / itemsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      render();
    }
  });
  pagination.appendChild(nextButton);
}