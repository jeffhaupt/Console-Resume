const bulletPoint = '\u2714';
const myName = "Jeffery Haupt";
const career = "Currently a lawyer, but hoping to do something about that!";
const myDescription = "Please tell me that I am not too old to learn new Javascript tricks";
const myInterests = ["Jiu Jitsu", "Comic Books", "Zombie Movies", "Weightlifting"];

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
console.log(`Career: ${career}`);
console.log(`Description: ${myDescription}`);

console.log(`\nMy interests: `);
for (let i = 0; i < myInterests.length; i++) {
  console.log(`${bulletPoint} ${myInterests[i]}`);
}

console.log(`\nPrevious Experience\n`);
for (let i = 0; i < jobs.length; i++) {
  displayPosition(jobs[i].companyName, jobs[i].jobTitle, jobs[i].jobDescription);
}

/*********************************************************
******      FUNCTIONS   **********************************
*********************************************************/

function displayPosition(company, job, description) {
  console.log(`${bulletPoint} ${job} at ${company} - ${description}`);
}
