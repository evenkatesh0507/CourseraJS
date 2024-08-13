const employees = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    department: "IT",
    salary: 50000,
    Experience: 2,
  },
  {
    id: 2,
    name: "Alice Smith",
    age: 28,
    department: "HR",
    salary: 45000,
    Experience: 4,
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 35,
    department: "Finance",
    salary: 60000,
    Experience: 6,
  },
];

function displayEmployees() {
  const totalEmployees = employees
    .map(
      (employee, index) =>
        `<p>${index + 1}: ${employee.name} - ${employee.department} - $${
          employee.salary
        }</p>`
    )
    .join("");
  document.getElementById("employeesDetails").innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
  const totalSalaries = employees.reduce(
    (acc, employee) => acc + employee.salary,
    0
  );
  alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees() {
  const hrEmployees = employees.filter(
    (employee) => employee.department === "HR"
  );
  const hrEmployeesDisplay = hrEmployees
    .map(
      (employee, index) =>
        `<p>${index + 1}: ${employee.name} - ${employee.department} - $${
          employee.salary
        }</p>`
    )
    .join("");
  document.getElementById("employeesDetails").innerHTML = hrEmployeesDisplay;
}

function displayITEmployees() {
  const itEmployees = employees.filter(
    (employee) => employee.department === "IT"
  );
  const itEmployeesDisplay = itEmployees
    .map(
      (employee, index) =>
        `<p>${index + 1}: ${employee.name} - ${employee.department} - $${
          employee.salary
        }</p>`
    )
    .join("");
  document.getElementById("employeesDetails").innerHTML = itEmployeesDisplay;
}

function experienceAbove3years() {
  const employeesAbove3yearsofExp = employees.filter(
    (employee, index) => employee.Experience > 3
  );
  const employeesAbove3yearsofExpDisplay = employeesAbove3yearsofExp
    .map(
      (employee, index) =>
        `<p>${index + 1}: ${employee.name} - ${employee.department} - $${
          employee.salary
        } - ${employee.Experience} years</p>`
    )
    .join("");
  document.getElementById("employeesDetails").innerHTML =
    employeesAbove3yearsofExpDisplay;
}

function findEmployeeById(employeeId) {
  const foundEmployee = employees.find(
    (employee) => employee.id === employeeId
  );
  if (foundEmployee) {
    alert(`Employee found: ${foundEmployee.name}`);
  } else {
    alert(`Employee not found`);
  }
}
