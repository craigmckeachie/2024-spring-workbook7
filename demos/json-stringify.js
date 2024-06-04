"use strict";

let job = {
  title: "Web Designer",
  startDate: new Date(),
  company: "AT&T",
  minSalary: 52000,
  maxSalary: 86000,
};

// string from object
let jobAsString = JSON.stringify(job);
console.log(jobAsString);
