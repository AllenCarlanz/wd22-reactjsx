import React from "react";

function StudentListItem({ name }) {
    return <li key={name}>{name}</li>;
}

export default StudentListItem;