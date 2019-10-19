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

const mySkills = [
  { skill: "Javascript", iscool: true },
  { skill: "HTML", iscool: false },
  { skill: "CSS", iscool: true },
  { skill: "Playing classical harp", iscool: true },
  { skill: "Spanish", iscool: false },
  { skill: "Public Speaking", iscool: false },
  { skill: "Lawyer", iscool: false }
];

//simply log the myName, career, and myDescription variables 
console.log(`Name: ${myName.toUpperCase()}`);
console.log(`Career: ${career}`);
console.log(`Description: ${myDescription}`);

//my interest section will loop through myInterests arrays and
//display each interest
console.log(`\nMy interests: `);
for (let i = 0; i < myInterests.length; i++) {
  console.log(`${bulletPoint} ${myInterests[i]}`);
}

//previous experience section will loop through jobs array and objects
//and then call displayPosition for each job and its objects
console.log(`\nPrevious Experience:\n`);
for (let i = 0; i < jobs.length; i++) {
  displayPosition(jobs[i].companyName, jobs[i].jobTitle, jobs[i].jobDescription);
}

//skill section will loop through the mySkills array of objects and
//call the displaySkill function to determine if the skill is cool or
//not before printing BAM in front of the skill
console.log(`\nMy Skills:\n`);
for (let i = 0; i < mySkills.length; i++) {
  displaySkill(mySkills[i].skill, mySkills[i].iscool);
}

/*********************************************************
******      FUNCTIONS   **********************************
*********************************************************/

//when called will display job title, company name, and a brief description of the job
function displayPosition(company, job, description) {
  console.log(`${bulletPoint} ${job} at ${company} - ${description}`);
}

//when called will determine if the skill is cool or not and then either
//return BAM in front of the skill or not
function displaySkill(skillToDisplay, coolOrNot) {
  if(coolOrNot) {
    console.log(`${bulletPoint} BAM: ${skillToDisplay}`);
  } else {
    console.log(`${bulletPoint} ${skillToDisplay}`);
  }
}
