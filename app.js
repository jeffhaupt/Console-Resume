const myName = "Jeffery Haupt";

const jobs = [
  {
    companyName: "St. Joseph County Public Defenders Office",
    jobTitle: "Deputy Public Defender",
    jobDescription: "Represent indigent juvenile clients in court."
  },
  {
    companyName: "Self-Employed",
    jobTitle: "Web Developer",
    jobDescription: "Designed and built client websites using WordPress."
  },
  {
    companyName: "St. Joseph County Prosecutors Office",
    jobTitle: "Deputy Prosecuting Attorney",
    jobDescription: "Represent State of Indiana in court."
  }
];

console.log(`Name: ${myName.toUpperCase()}`);

for (let i = 0; i < jobs.length; i++) {
  displayPosition(jobs[i].companyName, jobs[i].jobTitle, jobs[i].jobDescription);
}

/*********************************************************
******      FUNCTIONS   **********************************
*********************************************************/

function displayPosition(company, job, description) {
  console.log(`${job} at ${company} - ${description}`);
}
