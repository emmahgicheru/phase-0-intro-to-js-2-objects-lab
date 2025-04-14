// Employee details
const employee = {
  name: "Llewellyn Muirwe",
  streetAddress: "Heaven Street",
};

// 1. updateEmployeeWithKeyAndValue - Non-destructive update
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return { ...employee, [key]: value };
}

// 2. destructivelyUpdateEmployeeWithKeyAndValue - Destructive update
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// 3. deleteFromEmployeeByKey - Non-destructive delete
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

// 4. destructivelyDeleteFromEmployeeByKey - Destructive delete
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}