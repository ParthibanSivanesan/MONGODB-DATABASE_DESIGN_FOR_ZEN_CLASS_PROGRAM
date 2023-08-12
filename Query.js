//Database Creation: zen
    use zendb
//Creating Collections:
//Users:
db.users.insertMany([{ "id": 1, "name": "Gopinath", "batch": "B41WE" }, { "id": 2, "name": "Kavi", "batch": "B42WE" }, { "id": 3, "name": "Tamildhasan", "batch": "B43WE" }, { "id": 4, "name": "Vignesh", "batch": "B44WE" }, { "id": 5, "name": "Prabhu", "batch": "B45WE" }, { "id": 6, "name": "Priyanka", "batch": "B45WE" }, { "id": 7, "name": "Sharmi", "batch": "B44WE" }, { "id": 8, "name": "Anu", "batch": "B43WE" }, { "id": 9, "name": "Deepika", "batch": "B42WE" }, { "id": 10, "name": "Abi", "batch": "B41WE" }])
//Codekata:
db.codekata.insertMany([{ "id": 1, "completed": 281, "total": 500 }, { "id": 2, "completed": 425, "total": 500 }, { "id": 3, "completed": 75, "total": 500 }, { "id": 4, "completed": 229, "total": 500 }, { "id": 5, "completed": 456, "total": 500 }, { "id": 6, "completed": 367, "total": 500 }, { "id": 7, "completed": 308, "total": 500 }, { "id": 8, "completed": 176, "total": 500 }, { "id": 9, "completed": 99, "total": 500 }, { "id": 10, "completed": 145, "total": 500 }])
//Attendance:
db.attendance.insertMany([{ "id": 1, "date": "20-10-2020", "attendance": "absent" }, { "id": 2, "date": "25-10-2020", "attendance": "absent" }, { "id": 3, "date": "13-10-2020", "attendance": "absent" }, { "id": 4, "date": "30-10-2020", "attendance": "absent" }, { "id": 5, "date": "18-10-2020", "attendance": "absent" }, { "id": 6, "date": "20-10-2020", "attendance": "absent" }, { "id": 7, "date": "25-10-2020", "attendance": "absent" }, { "id": 8, "date": "18-10-2020", "attendance": "absent" }, { "id": 9, "date": "30-10-2020", "attendance": "absent" }, { "id": 10, "date": "27-10-2020", "attendance": "absent" }])
//Topics:
db.topics.insertMany([{ "topic": "JavaScript", "month": "Septemer" }, { "topic": "HTML", "month": "October" }, { "topic": "CSS", "month": "October" }, { "topic": "ReactJS", "month": "October" }, { "topic": "MongoDB", "month": "November" }])
//Tasks:
db.tasks.insertMany([{ "id": 1, "taskName": "DOMPagination", "submittedOn": "25-10-2020" }, { "id": 2, "taskName": "DOMCalculator", "submittedOn": "13-10-2020" }, { "id": 3, "taskName": "CRUDApplication", "submittedOn": "30-10-2020" }, { "id": 4, "taskName": "HTML&CSSWebdesign", "submittedOn": "20-10-2020" }, { "id": 5, "taskName": "PublicAPI", "submittedOn": "18-10-2020" }, { "id": 6, "taskName": "CRUDApplication", "submittedOn": "25-10-2020" }, { "id": 7, "taskName": "DOMPagination", "submittedOn": "13-10-2020" }, { "id": 8, "taskName": "PublicAPI", "submittedOn": "30-10-2020" }, { "id": 9, "taskName": "DOMCalculator", "submittedOn": "20-10-2020" }, { "id": 10, "taskName": "HTML&CSSWebdesign", "submittedOn": "18-10-2020" }])
//Company-Drives:
db.company_drives.insertMany([{ "companyName": "Freshworks", "date": "20-10-2020", "attendedCandidates": [2, 7] }, { "companyName": "Chargebee", "date": "18-10-2020", "attendedCandidates": [1, 6] }, { "companyName": "Amazon", "date": "30-10-2020", "attendedCandidates": [8, 3] }, { "companyName": "Zoho", "date": "25-10-2020", "attendedCandidates": [4, 9] }, { "companyName": "Kissflow", "date": "15-10-2020", "attendedCandidates": [5, 10] }])
//Mentors:
db.mentors.insertMany([{ "name": "Sanjay", "batch": "B41WE" }, { "name": "Magesh", "batch": "B42WE" }, { "name": "Sangeetha", "batch": "B43WE" }, { "name": "Mary", "batch": "B44WE" }, { "name": "Sai", "batch": "B45WE" }])

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Queries:

//1)Find all the topics and tasks which are thought in the month of October

db.topics.aggregate([
    {
        $lookup: {
            from: "tasks",
            localField: "month",
            foreignField: "month",
            as: "Tasks & Topics - October"
        }
    },
    {
        $match: { month: "October" }
    }

]);

//2)Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

db.company_drives.aggregate(
    {
        $match: { "date": { $gt: "15-Oct-2020", $lt: "31-Oct-2020" } }
    }
).toArray()

//3)Find all the company drives and students who are appeared for the placement.

db.company_drives.aggregate([
    {
        $lookup: {
            from: "users",
            localField: "attendedCandidates_id",
            foreignField: "id",
            as: "Attended Students"
        }
    }
])

//4)Find the number of problems solved by the user in codekata

db.users.aggregate([
    {
        $lookup: {
            from: "codekata",
            localField: "id",
            foreignField: "id",
            as: "Codekata Problems Solved"
        },

    }
]).toArray()

//5)Find all the mentors with who has the mentee's count more than 15

db.mentors.find({ "mentee's": { $gt: 15 } })

//6)Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

db.attendance.aggregate([
    {
        $match: {
            date: { $gte: "15-Oct-2020", $lte: "31-Oct-2020" }
        }
    },
    {
        $lookup: {
            from: "tasks",
            localField: "id",
            foreignField: "student_id",
            as: "Tasks Not Submitted"
        }
    },
    {
        $match: {
            "Tasks Not Submitted.submitted_On": { $not: { $gte: "15-Oct-2020", $lte: "31-Oct-2020" } }
        }
    }

])



// {
//     $group:{
//         _id: "$id",
//         absent_date: {$addToSet: "$date"},
//         task_submitted: {$addToSet: "$Tasks Not Submitted.submitted_On"}
//     }
// }

