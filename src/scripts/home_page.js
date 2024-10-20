
// Đăng xuất
let logoutBtn = document.getElementById("logOutBtn");

logoutBtn.onclick = function() {
    location.href = "http://127.0.0.1:5500/logout_page.html#";
};

// Tổng số khóa học
let courseList = JSON.parse(localStorage.getItem('courseList'));
let courseNum = document.getElementById("courseNum");

courseNum.textContent = courseList.length;

//Tổng số lớp
let classList = JSON.parse(localStorage.getItem("classList"));
let classNum = document.getElementById("classNum");

classNum.textContent = classList.length;

// Lớp đang hoạt động
let activeNum = 0;
let finishedNum = 0;
let pendingNum = 0;

for (let cl of classList) {
    if (cl.status === "Hoạt động") {
        activeNum += 1;
    } else if (cl.status === "Kết thúc") {
        finishedNum += 1;
    } else {
        pendingNum +=1
    }
};
let activeClass = document.getElementById("activeClass");
activeClass.textContent = activeNum;

// Lớp đã kết thúc
let finishedClass = document.getElementById("finishedClass");
finishedClass.textContent = finishedNum;

// Lớp đang chờ
let pendingClass = document.getElementById("pendingClass");
pendingClass.textContent = pendingNum;

// Tổng số sinh viên
let studentList = JSON.parse(localStorage.getItem("studentList"));
let studentNum = document.getElementById("studentNum");

studentNum.textContent = studentList.length;

// 