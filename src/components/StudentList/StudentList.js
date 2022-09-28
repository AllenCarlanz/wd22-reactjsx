import React from "react";
import { useState } from 'react';
import CreateStudent from "./CreateStudent";
import StudentListItem from "./StudentListItem";

function StudentList() {
    const [students, setStudents] = useState(["Person A", "Person B"]);
    const [name, setName] = useState("");

    const nameList = students.map(name =>
        <StudentListItem key={name} name={name} />
    );

    return (<>
        <h1>Student List</h1>
        <ul>
            {nameList}
        </ul>
        <CreateStudent students={students} setStudents={setStudents} name={name} setName={setName} />

    </>);
}

export default StudentList;