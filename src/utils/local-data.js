let courseList = [
    {
        id: 1,
        code: "RA01",
        courseName: "Khoá học 1",
        courseTime: 1000,
        status: true
    },
    {
        id: 2,
        code: "RA02",
        courseName: "Khoá học 2",
        courseTime: 2000,
        status: false
    },
    {
        id: 3,
        code: "RA03",
        courseName: "Khoá học 3",
        courseTime: 1500,
        status: true
    },
    {
        id: 4,
        code: "RA04",
        courseName: "Khoá học 4",
        courseTime: 1000,
        status: true
    },
    {
        id: 5,
        code: "RA05",
        courseName: "Khoá học 5",
        courseTime: 1000,
        status: true
    },
    {
        id: 6,
        code: "RA06",
        courseName: "Khoá học 6",
        courseTime: 1000,
        status: true
    },
    {
        id: 7,
        code: "RA07",
        courseName: "Khoá học 7",
        courseTime: 1000,
        status: true
    },
    {
        id: 8,
        code: "RA08",
        courseName: "Khoá học 8",
        courseTime: 1000,
        status: true
    },
    {
        id: 9,
        code: "RA09",
        courseName: "Khoá học 9",
        courseTime: 1000,
        status: true
    },
    {
        id: 10,
        code: "RA10",
        courseName: "Khoá học 10",
        courseTime: 1000,
        status: true
    }
];

let classList = [
    {
        id: 1,
        code: "C001",
        name: "HN-JV230508",
        teacher: "QuangND",
        description: "Java fullstack",
        studentNumber: 20,
        status: "Chờ lớp",
        course: "Khoá học 1"
    },
    {
        id: 2,
        code: "C002",
        name: "ĐN-JS230407",
        teacher: "AnNV",
        description: "Javascript",
        studentNumber: 22,
        status: "Hoạt động",
        course: "Khoá học 1"
    },
    {
        id: 3,
        code: "C003",
        name: "HCM-JV230425",
        teacher: "BìnhBV",
        description: "Frontend",
        studentNumber: 25,
        status: "Kết thúc",
        course: "Khoá học 1"
    },
    {
        id: 4,
        code: "C004",
        name: "FK-JV230627",
        teacher: "BìnhBV",
        description: "Backend",
        studentNumber: 20,
        status: "Chờ lớp",
        course: "Khoá học 2"
    },
    {
        id: 5,
        code: "C005",
        name: "HN-JV230509",
        teacher: "BìnhBV",
        description: "Java fullstack",
        studentNumber: 20,
        status: "Chờ lớp",
        course: "Khoá học 1"
    },
    {
        id: 6,
        code: "C006",
        name: "HN-JV230510",
        teacher: "BìnhBV",
        description: "Java fullstack",
        studentNumber: 20,
        status: "Chờ lớp",
        course: "Khoá học 3"
    },
    {
        id: 7,
        code: "C007",
        name: "HN-JV230511",
        teacher: "BìnhBV",
        description: "Java fullstack",
        studentNumber: 20,
        status: "Chờ lớp",
        course: "Khoá học 3"
    },
    {
        id: 8,
        code: "C008",
        name: "HN-JV230512",
        teacher: "BìnhBV",
        description: "Java fullstack",
        studentNumber: 20,
        status: "Chờ lớp",
        course: "Khoá học 2"
    },
    {
        id: 9,
        code: "C009",
        name: "HN-JV230513",
        teacher: "BìnhBV",
        description: "Java fullstack",
        studentNumber: 20,
        status: "Chờ lớp",
        course: "Khoá học 2"
    },
    {
        id: 10,
        code: "C010",
        name: "HN-JV230514",
        teacher: "BìnhBV",
        description: "Java fullstack",
        studentNumber: 20,
        status: "Chờ lớp",
        course: "Khoá học 3"
    }
];

let studentList = [
    {
        id: 1,
        code: "SV001",
        name: "Nguyễn Văn A",
        yob: "2000",
        address: "Hà Nội",
        status: "Chờ lớp",
        class: "ĐN-JS230407"
    },
    {
        id: 2,
        code: "SV002",
        name: "Nguyễn Văn B",
        yob: "2001",
        address: "Đà Nẵng",
        status: "Đang học",
        class: "HN-JV230508"
    },
    {
        id: 3,
        code: "SV003",
        name: "Nguyễn Văn C",
        yob: "2002",
        address: "Hồ Chí Minh",
        status: "Bảo lưu",
        class: "ĐN-JS230407"
    },
    {
        id: 4,
        code: "SV004",
        name: "Nguyễn Văn D",
        yob: "2000",
        address: "Nhật Bản",
        status: "Đình chỉ",
        class: "HN-JV230508"
    },
    {
        id: 5,
        code: "SV005",
        name: "Nguyễn Văn E",
        yob: "2000",
        address: "Hà Nội",
        status: "Tốt nghiệp",
        class: "HN-JV230508"
    },
    {
        id: 6,
        code: "SV006",
        name: "Nguyễn Văn F",
        yob: "2000",
        address: "Hà Nội",
        status: "Đang học",
        class: "HN-JV230508"
    },
    {
        id: 7,
        code: "SV007",
        name: "Nguyễn Văn G",
        yob: "2000",
        address: "Hà Nội",
        status: "Đang học",
        class: "ĐN-JS230407"
    },
    {
        id: 8,
        code: "SV008",
        name: "Nguyễn Văn H",
        yob: "2000",
        address: "Hà Nội",
        status: "Đang học",
        class: "HN-JV230508"
    },
    {
        id: 9,
        code: "SV009",
        name: "Nguyễn Văn I",
        yob: "2000",
        address: "Hà Nội",
        status: "Đang học",
        class: "ĐN-JS230407"
    },
    {
        id: 10,
        code: "SV010",
        name: "Nguyễn Văn K",
        yob: "2000",
        address: "Hà Nội",
        status: "Đang học",
        class: "ĐN-JS230407"
    }
];

let accountList = [
    {
        id: 1,
        email: "anv@rikkeiacademy.edu.vn",
        password: "123456",
        name: "Hoàng Văn A",
        status: true
    },
    {
        id: 2,
        email: "anv@rikkeiacademy.edu.vn",
        password: "654321",
        name: "Hoàng Văn B",
        status: false
    },
    {
        id: 3,
        email: "anv@rikkeiacademy.edu.vn",
        password: "123456",
        name: "Hoàng Văn C",
        status: false
    },
    {
        id: 4,
        email: "anv@rikkeiacademy.edu.vn",
        password: "123456",
        name: "Hoàng Văn D",
        status: true
    },
    {
        id: 5,
        email: "anv@rikkeiacademy.edu.vn",
        password: "123456",
        name: "Hoàng Văn E",
        status: true
    },
    {
        id: 6,
        email: "anv@rikkeiacademy.edu.vn",
        password: "123456",
        name: "Hoàng Văn F",
        status: true
    },
    {
        id: 7,
        email: "anv@rikkeiacademy.edu.vn",
        password: "123456",
        name: "Hoàng Văn G",
        status: true
    },
    {
        id: 8,
        email: "anv@rikkeiacademy.edu.vn",
        password: "123456",
        name: "Hoàng Văn H",
        status: true
    },
    {
        id: 9,
        email: "anv@rikkeiacademy.edu.vn",
        password: "123456",
        name: "Hoàng Văn I",
        status: true
    },
    {
        id: 10,
        email: "anv@rikkeiacademy.edu.vn",
        password: "123456",
        name: "Hoàng Văn K",
        status: true
    }
]

localStorage.setItem("courseList",JSON.stringify(courseList));
localStorage.setItem("classList",JSON.stringify(classList));
localStorage.setItem("studentList",JSON.stringify(studentList));
localStorage.setItem("accountList",JSON.stringify(accountList));