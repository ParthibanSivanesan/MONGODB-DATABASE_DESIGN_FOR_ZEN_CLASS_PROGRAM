//Zen Class Data:

// Design database for Zen class programme
// users
// codekata
// attendance
// topics
// tasks
// company_drives
// mentors

//1) Users:
[
  {
    id: 1,
    name: "Gopinath",
    batch: "B41WE",
  },
  {
    id: 2,
    name: "Kavi",
    batch: "B42WE",
  },
  {
    id: 3,
    name: "Tamildhasan",
    batch: "B43WE",
  },
  {
    id: 4,
    name: "Vignesh",
    batch: "B44WE",
  },
  {
    id: 5,
    name: "Prabhu",
    batch: "B45WE",
  },
  {
    id: 6,
    name: "Priyanka",
    batch: "B45WE",
  },
  {
    id: 7,
    name: "Sharmi",
    batch: "B44WE",
  },
  {
    id: 8,
    name: "Anu",
    batch: "B43WE",
  },
  {
    id: 9,
    name: "Deepika",
    batch: "B42WE",
  },
  {
    id: 10,
    name: "Abi",
    batch: "B41WE",
  },
][
  //2) Codekata:
  ({
    id: 1,
    completed: 281,
    total: 500,
  },
  {
    id: 2,
    completed: 425,
    total: 500,
  },
  {
    id: 3,
    completed: 75,
    total: 500,
  },
  {
    id: 4,
    completed: 229,
    total: 500,
  },
  {
    id: 5,
    completed: 456,
    total: 500,
  },
  {
    id: 6,
    completed: 367,
    total: 500,
  },
  {
    id: 7,
    completed: 308,
    total: 500,
  },
  {
    id: 8,
    completed: 176,
    total: 500,
  },
  {
    id: 9,
    completed: 99,
    total: 500,
  },
  {
    id: 10,
    completed: 145,
    total: 500,
  })
][
  //3) Attendance:
  ({
    id: 1,
    date: "20-Oct-2020",
    attendance: "absent",
  },
  {
    id: 2,
    date: "25-Oct-2020",
    attendance: "absent",
  },
  {
    id: 3,
    date: "13-Oct-2020",
    attendance: "absent",
  },
  {
    id: 4,
    date: "30-Oct-2020",
    attendance: "absent",
  },
  {
    id: 5,
    date: "01-Nov-2020",
    attendance: "absent",
  },
  {
    id: 6,
    date: "20-Oct-2020",
    attendance: "absent",
  },
  {
    id: 7,
    date: "11-Oct-2020",
    attendance: "absent",
  },
  {
    id: 8,
    date: "18-Oct-2020",
    attendance: "absent",
  },
  {
    id: 9,
    date: "30-Oct-2020",
    attendance: "absent",
  },
  {
    id: 10,
    date: "27-Oct-2020",
    attendance: "absent",
  })
][
  //4) Topics:
  ({
    topic_id: 1,
    topic: "JavaScript",
    month: "October",
  },
  {
    topic_id: 2,
    topic: "HTML",
    month: "Septemer",
  },
  {
    topic_id: 3,
    topic: "CSS",
    month: "Septemer",
  },
  {
    topic_id: 4,
    topic: "React JS",
    month: "October",
  },
  {
    topic_id: 5,
    topic: "MongoDB",
    month: "November",
  })
][
  //5) Tasks:
  ({
    student_id: 1,
    taskName: "DOM Pagination",
    month: "October",
    submitted_On: "13-Oct-2020",
  },
  {
    student_id: 2,
    taskName: "DOM Calculator",
    month: "November",
    submitted_On: "14-Oct-2020",
  },
  {
    student_id: 3,
    taskName: "CRUD Application",
    month: "October",
    submitted_On: "25-Oct-2020",
  },
  {
    student_id: 4,
    taskName: "HTML & CSS Webdesign",
    month: "September",
    submitted_On: "15-Oct-2020",
  },
  {
    student_id: 5,
    taskName: "Public API",
    month: "October",
    submitted_On: "28-Oct-2020",
  },
  {
    student_id: 6,
    taskName: "CRUD Application",
    month: "November",
    submitted_On: "20-Oct-2020",
  },
  {
    student_id: 7,
    taskName: "DOM Pagination",
    month: "October",
    submitted_On: "20-Oct-2020",
  },
  {
    student_id: 8,
    taskName: "Public API",
    month: "October",
    submitted_On: "08-Oct-2020",
  },
  {
    student_id: 9,
    taskName: "DOM Calculator",
    month: "September",
    submitted_On: "30-Oct-2020",
  },
  {
    student_id: 10,
    taskName: "HTML & CSS Webdesign",
    month: "October",
    submitted_On: "27-Oct-2020",
  })
][
  //6) Company_drives:
  ({
    companyName: "Freshworks",
    date: "20-Oct-2020",
    attendedCandidates_id: [2, 7],
  },
  {
    companyName: "Chargebee",
    date: "18-Oct-2020",
    attendedCandidates_id: [1, 6],
  },
  {
    companyName: "Amazon",
    date: "30-Oct-2020",
    attendedCandidates_id: [8, 3],
  },
  {
    companyName: "Zoho",
    date: "25-Oct-2020",
    attendedCandidates_id: [4, 9],
  },
  {
    companyName: "Kissflow",
    date: "15-Oct-2020",
    attendedCandidates_id: [5, 10],
  },
  {
    companyName: "Clari",
    date: "12-Oct-2020",
    attendedCandidates_id: [1, 6],
  },
  {
    companyName: "Infosys",
    date: "01-Nov-2020",
    attendedCandidates_id: [7, 4],
  },
  {
    companyName: "Accenture",
    date: "14-Oct-2020",
    attendedCandidates_id: [3, 2],
  })
][
  //7) Mentors:
  ({
    name: "Sanjay",
    batch: "B41WE",
    "mentee's": 25,
  },
  {
    name: "Magesh",
    batch: "B42WE",
    "mentee's": 15,
  },
  {
    name: "Sangeetha",
    batch: "B43WE",
    "mentee's": 20,
  },
  {
    name: "Mary",
    batch: "B44WE",
    "mentee's": 14,
  },
  {
    name: "Sai",
    batch: "B45WE",
    "mentee's": 18,
  })
];
