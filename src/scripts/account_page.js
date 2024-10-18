// Đăng xuất
let logoutBtn = document.getElementById("logOutBtn");

logoutBtn.onclick = function () {
  location.href = "http://127.0.0.1:5500/login_page.html#";
};

// Render thông tin
let accountList = JSON.parse(localStorage.getItem("accountList"));
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
  let pageData = accountList.slice(startIndex, endIndex);

  for (let account of pageData) {
    let html = "";
    let status = "";
    if (account.status) {
      status = "Đang hoạt động";
    } else {
      status = "Đang bị khoá";
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
  updatePagination();
}

render();

// Update pagination
function updatePagination() {
  let totalPages = Math.ceil(accountList.length / itemsPerPage);
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
    let totalPages = Math.ceil(accountList.length / itemsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      render();
    }
  });
  pagination.appendChild(nextButton);
}
