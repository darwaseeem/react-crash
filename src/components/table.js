import React from "react";
import EmployeeCard from "./employeeCard";

function Table() {
  const employees = [
    {
      id: 101,
      name: "Alice Johnson",
      department: "Engineering",
      position: "Software Engineer",
      email: "alice.johnson@example.com",
      salary: 85000,
      hire_date: "2021-03-15",
    },
    {
      id: 102,
      name: "Brian Lee",
      department: "Marketing",
      position: "Marketing Specialist",
      email: "brian.lee@example.com",
      salary: 64000,
      hire_date: "2020-07-01",
    },
    {
      id: 103,
      name: "Carla Rivera",
      department: "Human Resources",
      position: "HR Manager",
      email: "carla.rivera@example.com",
      salary: 72000,
      hire_date: "2019-11-12",
    },
    {
      id: 104,
      name: "David Patel",
      department: "Finance",
      position: "Financial Analyst",
      email: "david.patel@example.com",
      salary: 77000,
      hire_date: "2022-02-20",
    },
    {
      id: 105,
      name: "Ella Zhang",
      department: "Sales",
      position: "Account Executive",
      email: "ella.zhang@example.com",
      salary: 69000,
      hire_date: "2023-01-10",
    },
  ];

 return (
    <div>
  {
    employees?.map((employee) => (
        <EmployeeCard  employee={employee}/>
    ))
  }
  </div>
);
}

export default Table;
