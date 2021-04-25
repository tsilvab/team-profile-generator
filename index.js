const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const util = require("util");
const employees = [];

function init() {
  myTeamHeader();
  addEmployee();
}
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the employees name?",
      },
      {
        type: "list",
        name: "role",
        message: "What is the employees role?",
        choices: ["Manager", "Engineer", "Intern"],
      },
      {
        type: "input",
        name: "id",
        message: "What is the employee's ID number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
      },
    ])
    .then(function ({ name, role, id, email }) {
      let roleInfo = "";
      if (role === "Engineer") {
        roleInfo = "GitHub username";
      } else if (role === "Intern") {
        roleInfo = "school name";
      } else {
        roleInfo = "office phone number";
      }
      inquirer
        .prompt([
          {
            name: "roleInfo",
            message: `What is employee's ${roleInfo}?`,
          },
          {
            type: "list",
            name: "moreEmployees",
            message: "Would you like to add more employees?",
            choices: ["Yes", "No"]
          },
        ])
        .then(function ({ roleInfo, moreEmployees }) {
            let newMember = "";
          if (role === "Engineer") {
            newMember = new Engineer(name, id, email, roleInfo);
          } else if (role === "Intern") {
            newMember = new Intern(name, id, email, roleInfo);
          } else {
            newMember = new Manager(name, id, email, roleInfo);
          }
          employees.push(newMember);
          generateHtml(newMember).then(function () {
            if (moreEmployees === "Yes") {
              addEmployee();
            } else {
              console.log("Successfully generatorated Team Profile!");
            }
          });
        });
    });
}

function myTeamHeader() {
  const header = `<!DOCTYPE html>
<html lang="en">
   <head>
       <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
       <title>Team Profile Generator</title>
   </head>
  <body>
      <div class="container" id="team">
          <div class="row">
              <div class="col-12 text-center bg-info my-5 py-5 display-4 text-white">My Team</div>
          </div>
           <div class="row" id="cards">
        </div>
       </div>`;
  fs.writeFile("./template/main.html", header, function (err) {
    if (err) {
      console.log(err);
    }
  });
}

function generateHtml(member) {
  return new Promise(function (resolve, reject) {
    const name = member.getName();
    const role = member.getRole();
    const id = member.getId();
    const email = member.getEmail();
    // const gitHub = member.getGithub();
    // const school = member.getSchool();
    // const officePhone = member.getOfficeNumber();
    let html = "";
    if (role === "Engineer") {
      const gitHub = member.getGithub();
      html = `<div class="col-6">
        <div class="card mx-auto mb-3" style="width: 18rem">
        <div class="card-header">
        <h5>${name}</h5
        <h5>Engineer</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email Address: ${email}</li>
            <li class="list-group-item">GitHub: ${gitHub}</li>
        </ul>
        </div>
    </div>
    </div>
</div>

</body>
</html>`;
    } else if (role === "Intern") {
      const school = member.getSchool();
      html = `<div class="col-6">
        <div class="card mx-auto mb-3" style="width: 18rem">
        <div class="card-header">
        <h5>${name}</h5
        <h5>Intern</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email Address: ${email}</li>
            <li class="list-group-item">School: ${school}</li>
        </ul>
        </div>
    </div>
    </div>
</div>

</body>
</html>`;
    } else {
        // if (role === "Manager") allows to go through the entire prompt
      const officePhone = member.getOfficeNumber();
      html = `<div class="col-6">
        <div class="card mx-auto mb-3" style="width: 18rem">
        <div class="card-header">
        <h5>${name}</h5
        <h5>Manager</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email Address: ${email}</li>
            <li class="list-group-item">Office Phone: ${officePhone}</li>
        </ul>
        </div>
    </div>
    </div>
</div>

</body>
</html>`;
    }
    fs.appendFile("./template/Main.html", html, function (err) {
      if (err) {
        return reject(err);
      }

      return resolve();
    });
  });
}
init();
