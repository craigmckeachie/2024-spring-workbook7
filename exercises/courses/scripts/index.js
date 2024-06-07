"use strict";

//HTML Variables
const coursesTableBody = document.querySelector("#coursesTableBody");

//Functions
async function loadCourses() {
  let response = await fetch("http://localhost:8081/api/courses/");
  let courses = await response.json();

  for (let course of courses) {
    console.log(course.courseName);
    //create table row element and insert it in the document inside the table body
    //create 3 table cell elements
    //set the inner contents of the table cells to a specific property from the course object
    //append the table cells as children inside the table row
    let row = coursesTableBody.insertRow();
    //OR
    // let row = docucment.createElement("row");
    // coursesTableBody.appendChild(row);

    let td1 = document.createElement("td");
    td1.innerText = course.courseNum;
    row.appendChild(td1);

    let td2 = document.createElement("td");
    td2.innerText = course.courseName;
    row.appendChild(td2);

    let td3 = document.createElement("td");
    td3.innerText = course.dept;
    row.appendChild(td3);
    //then I want to generate the html below for each course object
    // <tr>
    //     <td>101</td>
    //     <td>HTML5 and CSS3</td>
    //     <td>CompSci</td>
    // </tr>
  }
}

//Associate Function to Event

//Initial Loading
loadCourses();
